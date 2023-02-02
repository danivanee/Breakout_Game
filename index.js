const grid = document.querySelector('.grid')
const blockWidth = 10
const blockHeight = 270

 class block {
   constructor(xAxis, yAxis) {
      this.bottomLeft = [xAxis,yAxis]
      this.bottomRight = [xAxis + blockWidth, yAxis]
      this.topLeft = [xAxis, yAxis + blockHeight]
      this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
   }
 }





function addBlock() {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = '10px'
    block.style.bottom = '270px'    
    grid.appendChild(block)
 }   

 addBlock()
    
    