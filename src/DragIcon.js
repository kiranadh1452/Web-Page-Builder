class DragIcon{
  constructor(item){
    this.leftValue = (item.clientRight - item.clientLeft)/2;

    const dot = document.createElement('div');
    dot.style.position = 'absolute';
    dot.style.width = "10px";
    dot.style.height = '10px';
    dot.style.borderRadius = "50%";
    dot.style.background = "red";

    dot.style.left = `${this.leftValue}px`;
    dot.style.top = `${item.clientBottom}px`;
    
    item.appendChild(dot);
  }
}

export { DragIcon };
