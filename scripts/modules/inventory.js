import TilesModels from "../models/tiles-models.js";
import InventoryItem from "./inventory-item.js";

export class Inventory {
  inventoryItems = {};
  constructor(element) {
    this.element = element;
  }
  init = (onItemClick) => {
    const inventoryItems = Object.values(TilesModels);
    inventoryItems.forEach((item) => {
      if(item ===TilesModels.sky){ 
        return;
      }
      const newItem = document.createElement("div");
      newItem.classList.add("item");
      const inventoryItem = new InventoryItem(newItem, item);
      inventoryItem.init(onItemClick);
      this.inventoryItems[item] = inventoryItem;
      this.element.appendChild(newItem);
    });
  };
  add = (type) => {
    this.inventoryItems[type].addToAmount();
  };

  remove = (type) => {
    this.inventoryItems[type].removeFromAmount();
  };

  hasItem = (type) => {
    return this.inventoryItems[type].hasMoreThanOne();
  };
}
