import TilesModels from "../models/tiles-models.js";
import ToolsModels from "../models/tools-models.js";
import TileHarvestDict from "../models/tile-harvest-dict.js";
import Tile from "./tiles.js";
import { Tool } from "./tool.js";
import { Inventory } from "./inventory.js";
import { STARTING_TEMPLATE } from "../models/tiles-template.js";
import { Upgrade } from "./upgrade.js";

const TOOLS_MAX_TIER = 30;
const ActionType = {
  add: "add",
  subtract: "subtract",
};
const hitSound = new Audio("../../assets/sounds/Minecrafthitsound.mp3");
const upgradeSound = new Audio("../../assets/sounds/levelUp.mp3");
upgradeSound.volume = 0.5;

export default class Game {
  inventory = null;
  activeTool = ToolsModels.shovel;
  activeTile = null;
  toolTier = 10;
  actionType = ActionType.subtract;
  upgrade = new Upgrade();
  constructor(dimensionX, dimensionY) {
    this.dimensionX = dimensionX;
    this.dimensionY = dimensionY;
    this.upgrade.init(this.onUpgrade);
  }

  buildWorld = (world) => {
    for (let i = 0; i < this.dimensionY; i++) {
      const row = this.createBox(world, ["row"]);
      for (let j = 0; j < this.dimensionX; j++) {
        const cell = this.createBox(row, ["cell"]);
        const tileType = this.generateTileType(j, i);
        const tile = new Tile(tileType, cell);
        tile.init(this.onTileClick);
      }
    }
  };

  buildToolKit = () => {
    const toolsContainer = document.querySelector(".tools");
    const availableTools = Object.keys(ToolsModels);
    availableTools.forEach((tool, index) => {
      const newElement = document.createElement("div");
      const newTool = new Tool(newElement, tool);
      newTool.init(this.onToolClick, index === 0);
      toolsContainer.appendChild(newElement);
    });
  };

  buildInventory = (inventoryContainer) => {
    const inventory = new Inventory(inventoryContainer);
    inventory.init(this.onItemClick);
    this.inventory = inventory;
  };

  createBox = (parent, classList) => {
    const newElement = document.createElement("div");
    classList.forEach((elementClass) => {
      newElement.classList.add(elementClass);
    });
    parent.appendChild(newElement);
    return newElement;
  };

  generateTileType = (x, y) => {
    const amountOfRows = STARTING_TEMPLATE.size - 1; // The length (height) of the 'STARTING_TEMPLATE'
    const rowFromTemplate =
      STARTING_TEMPLATE.get(y) || STARTING_TEMPLATE.get(amountOfRows);
    let cellFromTemplate = rowFromTemplate.at(x) || rowFromTemplate.at(0);
    //TODO: Make a Function that some times randomize soil for other materials
    if (cellFromTemplate === TilesModels.soil) {
      cellFromTemplate = this.getRandomSoilTile();
    }
    // 'cellFromTemplate' is either the found string or the first string in the row
    return cellFromTemplate;
  };

  onTileClick = (tile) => {
    if (this.actionType === ActionType.subtract) {
      const tileToHarvest = TileHarvestDict[tile.type];
      const isTierHighEnough = tileToHarvest.tier <= this.toolTier;
      // checks if you have the right tool for harvesting (tool and power of the tool)
      if (tileToHarvest.tools.includes(this.activeTool) && isTierHighEnough) {
        this.upgrade.addAction();
        this.inventory.add(tile.type);
        tile.setTileType(TilesModels.sky);
        hitSound.pause();
        hitSound.currentTime=0.5;
        hitSound.play();
      }
    }
    if (this.actionType === ActionType.add && tile.type === TilesModels.sky) {
      if (!this.activeTile) {
        return;
      }
      if (!this.inventory.hasItem(this.activeTile)) {
        return;
      }

      this.upgrade.addAction();
      this.inventory.remove(this.activeTile);
      tile.setTileType(this.activeTile);
      hitSound.pause();
      hitSound.currentTime=0.5;
      hitSound.play();
    }
  };

  onItemClick = (type) => {
    this.actionType = ActionType.add;
    this.activeTile = type;
    this.removeActive();
  };

  onToolClick = (toolType) => {
    this.activeTool = toolType;
    this.actionType = ActionType.subtract;
    this.removeActive();
  };

  removeActive = () => {
    const active = document.querySelectorAll(".tool-active");
    if (!active || !active.length) {
      return;
    }
    active.forEach((element) => {
      element.classList.remove("tool-active");
    });
  };

  onUpgrade = () => {
    this.toolTier += 10;
    if (this.toolTier === TOOLS_MAX_TIER) {
      this.upgrade.stopUpgrading();
    }
    upgradeSound.currentTime = 0.2;
    upgradeSound.play();
    const axeElement = document.querySelector(".axe");
    const pickaxeElement = document.querySelector(".pickaxe");
    const shovelElement = document.querySelector(".shovel");
    this.upgrade.changeToolsUI(
      axeElement,
      pickaxeElement,
      shovelElement,
      this.toolTier
    );
  };

  getRandomSoilTile() {
    const HARDEST_CHANCE = 15;
    const chance = Math.floor(Math.random() * HARDEST_CHANCE) + 1;
    if (chance < HARDEST_CHANCE - 3) return TilesModels.soil;
    return chance === HARDEST_CHANCE ? TilesModels.diamond : TilesModels.gold;
  }
}
