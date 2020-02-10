document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
  separate()
  start()
  document.addEventListener('keydown', function(e){
    if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "ArrowUp") {
    let targetUl = document.getElementById('moves-container')
    let moveLi = document.createElement('li')
    if (e.key === "ArrowRight") {
      move('right')
      moveLi.innerText = 'Right'
    } else if (e.key === "ArrowDown") {
      move('down')
      moveLi.innerText = 'Down'
    } else if (e.key === "ArrowUp") {
      move('up')
      moveLi.innerText = 'Up'
    } else if (e.key === "ArrowLeft"){
      move('left')
      moveLi.innerText = 'Left'
    } 
  }
})
})

