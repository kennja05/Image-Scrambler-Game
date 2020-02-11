document.addEventListener("DOMContentLoaded", function () {
  createGrid()
  renderBox(currentPosition)
  separate()
  start()
  document.addEventListener('keydown', function (e) {
    const moveLi = document.createElement('li')
    if (e.key === "ArrowRight") {
      move('right')
      moveLi.innerText = 'Right'
    } else if (e.key === "ArrowDown") {
      move('down')
      moveLi.innerText = 'Down'
    } else if (e.key === "ArrowUp") {
      move('up')
      moveLi.innerText = 'Up'
    } else if (e.key === "ArrowLeft") {
      move('left')
      moveLi.innerText = 'Left'
    }
  })
})

