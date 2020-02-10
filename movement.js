
let currentPosition = { x: 0, y: 0 } //starts off at bottom right
let prevTile;
NodeList.prototype.find = Array.prototype.find

function start() {
  let button = document.getElementById('start')
  button.addEventListener('click', (event) => {
    const board = document.getElementById('board')
    const non_perverted_board = [...board.children]
    const array = [...board.children]
    let newGame = []
    newGame = array.sort(function (a, b) { return 0.5 - Math.random() })

    // console.log("newGame", newGame);
    // console.log(non_perverted_board[0])
    while (board.firstChild) {
      board.firstChild.remove()
    }
    for (let i = 0; i < newGame.length; i++) {
      board.insertAdjacentHTML("beforeend", `
      <div class="tile" data-x=${non_perverted_board[i].dataset.x} data-y=${non_perverted_board[i].dataset.y} id="${newGame[i].id}"></div>
      `)
    }
    const tile = document.querySelector('#empty');

    currentPosition = tile.dataset
    prevTile = tile;
    console.log("GIVE ME THAT BOY:", currentPosition);
    renderBot(currentPosition)
  })
}

function check() {

}


function separate() {
  const currentTile = document.getElementsByClassName('tile')
  const board2 = document.getElementById('board2')
  const currentTileArray = [...currentTile]
  for (let i = 0; i < currentTileArray.length; i++) {
    board2.insertAdjacentHTML("beforeend", `
   <div class="tile" data-x=${currentTileArray[i].dataset.x} data-y=${currentTileArray[i].dataset.y} id="${currentTileArray[i].id}"></div>
   `)
  }
  board2.style.display = "none";

}

function createGrid() {
  const setTheory = ["empty", "piece1", "piece2", "piece3", "piece4", "piece5", "piece6", "piece7", "piece8"]
  const board = document.querySelector("#board")
  const start = document.getElementById('start')
  start.innerText = 'start game'
  let counter = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board.insertAdjacentHTML("beforeend", `
        <div class="tile" data-x=${j} data-y=${i} id="${setTheory[counter]}"></div>
        `)
      counter += 1
    }
  }
}
function smartCounting() {
  let count = document.getElementById('move number')
  counting = parseInt(count.innerText)
  count.innerHTML = counting + 1
}

function renderBot(targetPosition) {
  const tiles = document.querySelectorAll(".tile")

  const newTile = tiles.find(function (tile) {
    return parseInt(tile.dataset.x) == parseInt(targetPosition.x) && parseInt(tile.dataset.y) == parseInt(targetPosition.y)
  })
  if (!newTile) {
    return false;
  } else {
    if (prevTile) {
      smartCounting()
      prevTile.id = newTile.id
      //prevTile.img = newTile.img
    }

    prevTile = newTile
    newTile.id = "empty"
    // check()
    return true
  }
  
}

function move(direction) {
  console.log("CURRENT POSITION:", currentPosition);
  let x = currentPosition.x;
  let y = currentPosition.y;
  switch (direction) {
    case "left":
      x--
      break;
    case "right":
      x++
      break;
    case "up":
      y--
      break;
    case "down":
      y++
      break;
    }
          
  const moved = renderBot({ x, y })
  if (moved) {
    currentPosition = { x, y }
  }
}



