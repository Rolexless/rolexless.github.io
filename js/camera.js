export function setupCamera(kb, player) {
  kb.onUpdate(() => {
    kb.camPos(player.pos);
  });
}