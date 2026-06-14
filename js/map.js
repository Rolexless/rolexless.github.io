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

export function createMap(kb, { onPlayerSpawn }) {

    map.forEach((row, y) => {
        row.split("").forEach((char, x) => {

            if (char === "#") {
                kb.add([
                    kb.rect(TILE_SIZE, TILE_SIZE),
                    kb.pos(x * TILE_SIZE, y * TILE_SIZE),
                    kb.area(),
                    kb.body({ isStatic: true }),
                    kb.color(80, 80, 80),
                ]);
            }

            if (char === "P") {
                onPlayerSpawn(x * TILE_SIZE, y * TILE_SIZE);
            }

        });
    });
}