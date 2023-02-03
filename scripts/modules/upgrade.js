const ACTIONS_TO_UPGRADE = 10;

export class Upgrade {
  element = document.querySelector(".upgrade");
  actions = 0;
  init = (onUpgrade) => {
    this.element.disabled = true;
    this.element.addEventListener("click", () => {
      if(this.actions <ACTIONS_TO_UPGRADE){
        return;
      }
      this.actions = 0;
      this.element.disabled = true;
      onUpgrade(); 
    });
  };
  
  addAction = () => {
    this.actions++;
    if(this.actions < ACTIONS_TO_UPGRADE){
      return;
    }
    this.element.disabled = false;
  }
}
