
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
    let minute = 00
    let hour = 00
    let separateCounter = 0
    let oneZeroSecond
    let oneZeroMinute
    let oneZeroHour
    let timeSplit
    if (document.getElementById('timer').innerText == "00:00:00") {
      function incrementTimer(){
        let timer = document.getElementById('timer')
        let splitTime = timer.innerText.split(':')
        timeSplit = splitTime[2]
        let seconds = parseInt(timeSplit) + 1
        separateCounter = seconds
      if(separateCounter >= 60){
        minute += 1
        seconds = 0
      }
      if(minute >= 60){
        hour += 1
        minute = 0 
      }
      if(seconds < 10){ oneZeroSecond = '0' + seconds}else{ oneZeroSecond = seconds}
      if(minute <10){ oneZeroMinute = '0' + minute}else{ oneZeroMinute = minute}
      if(hour <10){ oneZeroHour = '0' + hour}else{ oneZeroHour = hour}
      timer.innerText = oneZeroHour + ' : ' + oneZeroMinute + ' : ' + oneZeroSecond
      }
      const timeElapsed = setInterval(incrementTimer, 1000)
    }

    while (board.firstChild) {
      board.firstChild.remove()
    }
    for (let i = 0; i < newGame.length; i++) {
      board.insertAdjacentHTML("beforeend", `
      <div class="tile" style="transform: translate(${non_perverted_board[i].dataset.x *100}%,${non_perverted_board[i].dataset.y *100}%)" data-x=${non_perverted_board[i].dataset.x} data-y=${non_perverted_board[i].dataset.y} id="${newGame[i].id}"></div>
      `)  //style="transform: translate(${j * 100}%,${i * 100}%)
    }
    const tile = document.querySelector('#empty');

    currentPosition = tile.dataset
    prevTile = tile;
    console.log("GIVE ME THAT BOY:", currentPosition);
    renderBox(currentPosition)
  })
}
function check(){
  let currentPos = Array.from(document.getElementsByClassName('tile')).map(div => div.id).slice(0,9)
  let solution = ["empty","piece1","piece2","piece3","piece4","piece5","piece6","piece7","piece8"]
  if (JSON.stringify(currentPos) === JSON.stringify(solution)){
    solvedPuzzle()
  }
}


//this function will be updated to take in the logic for posting to the leaderboard
function solvedPuzzle(){
  let controlPanel = document.getElementById('control-panel')
  let myDiv = document.createElement('div')
  let moveCount = document.getElementById('move number').innerText
  let time = document.getElementById('timer').innerText
  
  if(moveCount != 0){
   // if(myDiv.innerHTML){
      myDiv.innerHTML = `<h3>Puzzle solved in ${moveCount} moves in ${time} seconds</h3>` 
      controlPanel.append(myDiv);
   
   // }
  }
  //debugger;
  
  //create form that will take in user name and then post it to the database along with move count + timer
  //button to restart game
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
        <div class="tile" style="transform: translate(${j * 100}%,${i * 100}%);" data-x=${j} data-y=${i} id="${setTheory[counter]}"></div>
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

function renderBox(targetPosition) {
  const tiles = document.querySelectorAll(".tile")
  const gameStarted = document.getElementById("gamestarted")
  gameStarted.style.display = "none";
  const newTile = tiles.find(function (tile) {
    return parseInt(tile.dataset.x) == parseInt(targetPosition.x) && parseInt(tile.dataset.y) == parseInt(targetPosition.y)
  })
  if (!newTile) {
    return false;
  } else {
    if (prevTile) {
      if(gameStarted.innerText == "true"){
      smartCounting()
    }
      prevTile.id = newTile.id
      gameStarted.innerHTML = "true"
    }

    prevTile = newTile
    newTile.id = "empty"
     check()
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
          
  const moved = renderBox({ x, y })
  if (moved) {
    currentPosition = { x, y }
  }
}



