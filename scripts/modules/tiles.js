import TilesModels from "../models/tiles-models.js";

export default class Tile {
  constructor(type, element) {
    this.type = type;
    this.element = element;
  }

  init = (onClick) => {
    this.element.classList.add(this.type);
    this.element.addEventListener("click", (event) => {
      onClick(this);
    });
  };

  setTileType(type) {
    if(!TilesModels[type]){
      return;
    }
    this.element.classList.remove(this.type);
    this.type = type;
    this.element.classList.add(this.type);
  }
}
