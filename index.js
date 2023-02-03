const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 50

 class block {
   constructor(xAxis, yAxis) {
      this.bottomLeft = [xAxis,yAxis]
      this.bottomRight = [xAxis + blockWidth, yAxis]
      this.topLeft = [xAxis, yAxis + blockHeight]
      this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
   }
 }

 const blocks = [
   new block(10,270),
   new block(120,270),
   new block(230,270),
   new block(340,270),
   new block(450,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
   new block(10,270),
 ]

 console.log(blocks[0])

function addBlocks() {
   for (let i = 0; i < blocks.length; i++) {
      const block = document.createElement('div')
      block.classList.add('block')
      block.style.left = blocks[i].bottomLeft[0] + 'px'
      block.style.bottom = blocks[i].bottomLeft[1] + 'px'    
      grid.appendChild(block)
   }
 }   

 addBlocks()
    
    