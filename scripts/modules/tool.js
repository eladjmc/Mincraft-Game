import ToolsModels from "../models/tools-models.js";

export class Tool {
  constructor(element, type) {
    this.element = element;
    this.type = type;
  }

  init = (onClick,isFirstTool) => {
    this.element.classList.add(this.type);
    if(isFirstTool){
      this.element.classList.add('tool-active');
      document.querySelector('body').style=`cursor:url(/assets/cursors/${this.type}.cur) 20 7, auto`;
    }
    this.element.addEventListener("click", (event) => {
      onClick(this.type);
      this.element.classList.add('tool-active');
      //TODO add Mouse-pointer
      document.querySelector('body').style=`cursor:url(/assets/cursors/${this.type}.cur) 20 7, auto`;
      
    });
  };
}
