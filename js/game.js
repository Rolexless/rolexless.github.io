import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

import * as Map from "./map.js";
import * as Camera from "./camera.js";
import * as Player from "./player.js"
import * as Input from "./input.js";

const kb = kaboom({
  canvas: document.getElementById("game"),
  background: [20, 20, 30],
  gravity: 0,
});

let player;
Map.createMap(kb, {
  onPlayerSpawn: (x, y) => {
    player = Player.createPlayer(kb, x, y);
  },
});

Input.setupInput(kb, player);
Camera.setupCamera(kb, player);
