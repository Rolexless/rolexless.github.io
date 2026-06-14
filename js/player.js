export function createPlayer(kb, x, y) {
  return kb.add([
    kb.rect(32, 32),
    kb.pos(x, y),
    kb.color(0, 200, 255),
    kb.area(),
    kb.body(),
  ]);
}