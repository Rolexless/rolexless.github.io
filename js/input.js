export function setupInput(kb, player) {
  const SPEED = 200;

  kb.onKeyDown("left", () => player.move(-SPEED, 0));
  kb.onKeyDown("right", () => player.move(SPEED, 0));
  kb.onKeyDown("up", () => player.move(0, -SPEED));
  kb.onKeyDown("down", () => player.move(0, SPEED));

  kb.onKeyDown("a", () => player.move(-SPEED, 0));
  kb.onKeyDown("d", () => player.move(SPEED, 0));
  kb.onKeyDown("w", () => player.move(0, -SPEED));
  kb.onKeyDown("s", () => player.move(0, SPEED));
}