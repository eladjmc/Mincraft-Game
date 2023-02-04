import Game from "./modules/game.js";
const world = document.getElementById("world");
const inventory = document.querySelector(".inventory");
const tools = document.querySelector(".tools");
const resetBtn = document.querySelector(".reset-game-btn");
const inventoryWindow = document.querySelector(".inventory-window");
const gameMusic = new Audio("../assets/sounds/gameMusic.mp3");
const resetGameSound = new Audio("../assets/sounds/resetWorld.mp3");
const openInventorySound = new Audio("../assets/sounds/openInventory.mp3");
const closeInventorySound = new Audio("../assets/sounds/closeInventory.mp3");

const main = () => {
  buttonListeners();
  if (!world) return;
  const game = new Game(40, 20);
  game.buildWorld(world);
  game.buildToolKit();
  game.buildInventory(inventory);
};
const resetGame = () => {
  resetGameSound.currentTime = 0.2;
  resetGameSound.play();
  gameMusic.pause();
  gameMusic.currentTime = 0;
  gameMusic.loop = true;
  gameMusic.play();

  for (let index = 0; index < 2; index++) {
    // No idea why buy this fixed inventory bug
    inventory.classList.remove("scale-one");
    world.innerHTML = "";
    inventory.innerHTML = "";
    tools.innerHTML = "";
    main();
  }
};

const setSoundVolume = () => {
  resetGameSound.volume = 0.7g;
  openInventorySound.volume = 0.7;
  closeInventorySound.volume = 0.7;
  gameMusic.volume = 0.2;
};

const buttonListeners = () => {
  document.querySelector(".cta").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".game-start-scene").classList.add("display-none");
    document.querySelector(".game-scene").classList.remove("display-none");
    gameMusic.loop = true;
    gameMusic.play();
  });
  resetBtn.addEventListener("click", resetGame);

  inventoryWindow.addEventListener("click", () => {
    inventory.classList.toggle("scale-one");
    if (inventory.classList.contains("scale-one")) {
      openInventorySound.pause();
      openInventorySound.currentTime = 0.1;
      openInventorySound.play();
    } else {
      closeInventorySound.pause();
      closeInventorySound.currentTime = 0.1;
      closeInventorySound.play();
    }
  });
};
window.onload = () => {
  setSoundVolume();
  main();
};
