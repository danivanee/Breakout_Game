const grid = document.querySelector('.grid')

 function addBlock() {
    const block = document.createElement('div')
    block.classList.add('block')
    block.style.left = '10px'
    block.style.bottom = '270px'    
    grid.appendChild(block)
 }   

 addBlock()
    
    