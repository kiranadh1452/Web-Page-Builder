class DragIcon{
  
  constructor(item){
    this.leftValue = ((item.clientRight - item.clientLeft)/2) - 10;

    this.dot = document.createElement('div');
    
    this.dot.style.position = 'relative';
    
    this.dot.style.width = "10px";
    this.dot.style.height = '10px';
    this.dot.style.background = "red";
    this.dot.style.borderRadius = "50%";

    this.dot.style.left = `${item.leftValue}px`;
    this.dot.style.top = `${item.clientBottom+10}px`;
    
    item.appendChild(this.dot);
    this.dot.setAttribute('class','dragIcon');
  }

  delete(){
    this.dot.remove();
  }
}

export { DragIcon };
