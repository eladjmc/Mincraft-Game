import ToolsModels from "../models/tools-models.js";

export class Tool {
  constructor(element, type) {
    this.element = element;
    this.type = type;
  }

  init = (onClick,isFirstTool) => {
    this.element.classList.add(this.type);
    this.element.textContent = this.type;
    if(isFirstTool){
      this.element.classList.add('tool-active');
    }
    this.element.addEventListener("click", (event) => {
      onClick(this.type);
      this.element.classList.add('tool-active');
      //TODO add Mouse-pointer
    });
  };
}
