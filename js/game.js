import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

const k = kaboom(
  {
    canvas: document.getElementById("game"),
    background: [20, 20, 30],
  }
);

const TILE_SIZE = 32;

const map = [
  "################",
  "#......#.......#",
  "#......#..P....#",
  "#......#.......#",
  "#......####....#",
  "#..............#",
  "################",
];

const player = k.add([
  k.rect(32, 32),
  k.pos(0, 0),
  k.color(0, 200, 255),
  k.area(),
  k.body(),
]);

k.onUpdate(() => {
  k.camPos(player.pos);
});

const SPEED = 200;

// construir mapa
map.forEach((row, y) => {
  row.split("").forEach((char, x) => {
    if (char === "#") {
      k.add([
        k.rect(TILE_SIZE, TILE_SIZE),
        k.pos(x * TILE_SIZE, y * TILE_SIZE),
        k.area(),
        k.body({ isStatic: true }),
        k.color(80, 80, 80),
      ]);
    }

    if (char === "P") {
      player.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);
    }
  });
});

// movimiento
k.onKeyDown("left", () => player.move(-SPEED, 0));
k.onKeyDown("right", () => player.move(SPEED, 0));
k.onKeyDown("up", () => player.move(0, -SPEED));
k.onKeyDown("down", () => player.move(0, SPEED));

k.onKeyDown("a", () => player.move(-SPEED, 0));
k.onKeyDown("d", () => player.move(SPEED, 0));
k.onKeyDown("w", () => player.move(0, -SPEED));
k.onKeyDown("s", () => player.move(0, SPEED));