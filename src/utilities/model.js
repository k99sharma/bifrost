import { World } from "../World/World.js";

function createModel() {
  const modelContainer = document.querySelector("#scene");

  const world = new World(modelContainer); // new world instance

  world.start(); // start world

  return world;
}

export default createModel;
