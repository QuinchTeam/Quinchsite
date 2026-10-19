// Pixel sprites shared by the hero sky and the page backdrop.

export type Area = { x: number; y: number; width: number; height: number };

export const noise = (x: number, y: number) => {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return value - Math.floor(value);
};

// 0 most of the time, peaking at 1 briefly once per seeded 12-36s period.
export const sparkleAt = (elapsed: number, seed: number) => {
  const period = 12 + noise(seed, 24) * 24;
  const phase = (elapsed / period + noise(seed, 25)) % 1;
  return Math.max(0, 1 - Math.abs(phase - 0.5) / 0.09) ** 2;
};

export function drawStar(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  alpha: number,
  sparkle: number,
) {
  context.globalAlpha = alpha;
  context.fillRect(x, y, size, 1);
  if (sparkle <= 0) return;
  // Pixel twinkle: spaced dots on the four arms and dimmer diagonals.
  context.globalAlpha = sparkle * 0.6;
  for (const [dx, dy] of [
    [0, -4],
    [4, 0],
    [0, 4],
    [-4, 0],
  ])
    context.fillRect(x + dx, y + dy, 1, 1);
  context.globalAlpha = sparkle * 0.35;
  for (const [dx, dy] of [
    [-2, -2],
    [2, -2],
    [2, 2],
    [-2, 2],
  ])
    context.fillRect(x + dx, y + dy, 1, 1);
}

export const createComet = () => ({
  start: -Infinity,
  next: 4 + Math.random() * 5,
  area: { x: 0, y: 0, width: 0, height: 0 },
  x: 0,
  y: 0,
  length: 80,
});

// Spawns into a random area every 14-32s and is clipped to it.
export function drawComet(
  context: CanvasRenderingContext2D,
  comet: ReturnType<typeof createComet>,
  elapsed: number,
  areas: Area[],
  color: string,
) {
  if (elapsed >= comet.next && areas.length) {
    const area = areas[Math.floor(Math.random() * areas.length)];
    comet.start = elapsed;
    comet.area = area;
    comet.x = area.x + area.width * (0.08 + Math.random() * 0.55);
    comet.y = area.y + area.height * (0.12 + Math.random() * 0.22);
    comet.length = 60 + Math.random() * 60;
    comet.next = elapsed + 14 + Math.random() * 18;
  }
  const progress = (elapsed - comet.start) / 1.8;
  if (progress < 0 || progress >= 1) return;
  const { area } = comet;
  const travel = progress * Math.min(area.width * 0.5, 330);
  const headX = comet.x + travel;
  const headY = comet.y + travel * 0.4;
  context.save();
  context.beginPath();
  context.rect(area.x, area.y, area.width, area.height);
  context.clip();
  context.fillStyle = color;
  for (let step = 0; step < comet.length; step += 3) {
    context.globalAlpha =
      Math.sin(progress * Math.PI) * (1 - step / comet.length) ** 2;
    context.fillRect(
      Math.round(headX - step),
      Math.round(headY - step * 0.4),
      2,
      2,
    );
  }
  context.restore();
}

// Tiny pixel bird: wings raised (v) and wings down (m), swapped to flap.
const birdUp = [
  [-2, -2],
  [2, -2],
  [-1, -1],
  [1, -1],
  [0, 0],
];
const birdDown = [
  [-1, -1],
  [1, -1],
  [-2, 0],
  [0, 0],
  [2, 0],
];

export const createFlock = () => ({
  start: -Infinity,
  next: 3 + Math.random() * 6,
  area: { x: 0, y: 0, width: 0, height: 0 },
  x: 0,
  y: 0,
  direction: 1,
  birds: [] as { dx: number; dy: number; flap: number }[],
});

// Spawns into a random area every 12-28s, flies 8s, and is clipped to it.
export function drawFlock(
  context: CanvasRenderingContext2D,
  flock: ReturnType<typeof createFlock>,
  elapsed: number,
  areas: Area[],
  color: string,
) {
  if (elapsed >= flock.next && areas.length) {
    const area = areas[Math.floor(Math.random() * areas.length)];
    flock.start = elapsed;
    flock.area = area;
    flock.direction = Math.random() < 0.5 ? 1 : -1;
    flock.x =
      area.x +
      area.width *
        (flock.direction > 0
          ? 0.05 + Math.random() * 0.35
          : 0.6 + Math.random() * 0.35);
    flock.y = area.y + area.height * (0.12 + Math.random() * 0.4);
    flock.birds = Array.from(
      { length: 1 + Math.floor(Math.random() * 5) },
      (_, index) => ({
        // Loose V: followers trail behind the leader on alternating sides.
        dx: -Math.ceil(index / 2) * (9 + Math.random() * 5),
        dy:
          (index % 2 ? -1 : 1) * Math.ceil(index / 2) * (5 + Math.random() * 3),
        flap: Math.random() * 4,
      }),
    );
    flock.next = elapsed + 12 + Math.random() * 16;
  }
  const progress = (elapsed - flock.start) / 8;
  if (progress < 0 || progress >= 1) return;
  const { area } = flock;
  const travel = progress * Math.min(area.width * 0.45, 420);
  // Fade in quickly, then dissolve pixel by pixel as the flock vanishes into the haze.
  const life = Math.min(1, progress / 0.12, (1 - progress) / 0.45);
  context.save();
  context.beginPath();
  context.rect(area.x, area.y, area.width, area.height);
  context.clip();
  context.fillStyle = color;
  context.globalAlpha = 0.5 + life * 0.5;
  for (const bird of flock.birds) {
    const x = Math.round(flock.x + flock.direction * (travel + bird.dx));
    const y = Math.round(
      flock.y - travel * 0.1 + bird.dy + Math.sin(elapsed * 3 + bird.flap),
    );
    const pose = Math.floor(elapsed * 6 + bird.flap) % 2 ? birdUp : birdDown;
    for (const [px, py] of pose)
      if (Math.random() < life) context.fillRect(x + px, y + py, 1, 1);
  }
  context.restore();
}
