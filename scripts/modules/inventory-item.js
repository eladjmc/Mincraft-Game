export default class InventoryItem {
  amountElement = document.createElement("div");
  amount = 0;
  constructor(element, type) {
    this.element = element;
    this.type = type;
  }

  init = (onItemClick) => {
    this.element.classList.add(this.type);
    this.amountElement.textContent = this.amount;
    this.amountElement.classList.add("item-amount");
    this.element.appendChild(this.amountElement);
    this.element.addEventListener("click", (event) => {
      if (!this.amount) {
        return;
      }
      onItemClick(this.type);
      this.element.classList.add("tool-active");
      //TODO: add cursors to the cursor folder
      document.querySelector('body').style=`cursor:url(/assets/cursors/${this.type}.cur) 20 7, auto`;
    });
  };
  addToAmount = () => {
    this.amount++;
    this.amountElement.textContent = this.amount;
  };

  removeFromAmount = () => {
    this.amount--;
    this.amountElement.textContent = this.amount;
  };

  hasMoreThanOne = () => Boolean(this.amount);
}
