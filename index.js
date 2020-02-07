document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  

  // ADD CODE HERE!
  document.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "ArrowUp") {
    let targetUl = document.getElementById('moves-container')
    let moveLi = document.createElement('li')

    //console.timeEnd('Search page');
 

    if (e.key === "ArrowRight") {
      move('right')
      moveLi.innerText = 'Right'
      // targetUl.append(moveLi)
    } else if (e.key === "ArrowDown") {
      move('down')
      moveLi.innerText = 'Down'
      // targetUl.append(moveLi)
    } else if (e.key === "ArrowUp") {
      move('up')
      moveLi.innerText = 'Up'
      // targetUl.append(moveLi)
    } else if (e.key === "ArrowLeft"){
      move('left')
      moveLi.innerText = 'Left'
      // targetUl.append(moveLi)
    } 
  }
})
move()

function doSomething(){    
      for(i=0;i<1000000;i++){var x = i*i;}
}

})

