import Game from "./modules/game.js";
const world = document.getElementById("world");
const inventory = document.querySelector(".inventory");
const tools = document.querySelector(".tools");
const resetBtn = document.querySelector(".reset-game-btn");

const main = () => {
  buttonListeners();
  if (!world) return;
  const game = new Game(20, 20);
  game.buildWorld(world);
  game.buildToolKit();
  game.buildInventory(inventory);
};
const resetGame = () => {
  world.innerHTML = "";
  inventory.innerHTML = "";
  tools.innerHTML = "";
  main();
};

const buttonListeners = () => {
  document.querySelector(".cta").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".game-start-scene").classList.add("display-none");
    document.querySelector(".game-scene").classList.remove("display-none");
  });
  resetBtn.addEventListener("click", resetGame);
};
window.onload = () => {
  main();
};
