import ToolsModels from "../models/tools-models.js";
const ACTIONS_TO_UPGRADE = 10;
export class Upgrade {
  element = document.querySelector(".upgrade");
  isMaxTier = false;
  actions = 0;
  init = (onUpgrade) => {
    this.element.disabled = true;
    this.element.addEventListener("click", () => {
      if (this.actions < ACTIONS_TO_UPGRADE) {
        return;
      }
      this.actions = 0;
      this.element.disabled = true;
      onUpgrade();
    });
  };

  addAction = () => {
    if (this.isMaxTier) {
      return;
    }
    this.actions++;
    if (this.actions < ACTIONS_TO_UPGRADE) {
      return;
    }
    this.element.disabled = false;
  };

  changeToolsUI = (axe, pickaxe, shovel, newTier) => {
    axe.classList.add(`${ToolsModels.axe}-tier${newTier}`);
    shovel.classList.add(`${ToolsModels.shovel}-tier${newTier}`);
    pickaxe.classList.add(`${ToolsModels.pickaxe}-tier${newTier}`);
  };

  stopUpgrading() {
    this.isMaxTier = true;
  }
}
