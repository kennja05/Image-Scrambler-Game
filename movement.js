
let currentPosition = { x: 0, y: 0} //starts off at bottom right
let prevTile;
NodeList.prototype.find = Array.prototype.find

//let Picture = ["https://static.wixstatic.com/media/b77fe464cfc445da9003a5383a3e1acf.jpg","https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/guy-fieri/FN-TalentAvatar-Guy-Fieri-colorblock.jpg.rend.hgtvcom.616.616.suffix/1531174403377.jpeg","https://www.biography.com/.image/t_share/MTIwNjA4NjM0MTI0NTM1MzA4/guy-fieri-101311-1-402.jpg","https://pbs.twimg.com/profile_images/1162445050590183424/WL2lQ7OR_400x400.jpg","https://cdn.vox-cdn.com/thumbor/vXCXUHwyomFOsISJFhHPfRdZCa8=/0x0:5221x3481/1200x800/filters:focal(2064x1785:2898x2619)/cdn.vox-cdn.com/uploads/chorus_image/image/59410935/GettyImages_642908826.0.jpg","https://media.gq.com/photos/59dfc6d9d61cb80476584e18/16:9/w_1280,c_limit/guy-fieiri-flame.jpg","https://media2.s-nbcnews.com/i/newscms/2018_37/1366573/guy-fieri-today-main-180910_463605ac6a5e40795b552795b5215fd0.jpg","https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/the-guy-fieri-1568310608.jpg?crop=1.00xw:0.812xh;0,0&resize=900:*","https://wydaily.com/wp-content/uploads/2019/04/Guy_Fieri_cropped.jpg"]
function createGrid(){
  const board = document.querySelector("#board")
//separate counter 
let counter = 0
//<img id= "thing" src=${Picture[counter]} style= "height:5vw
  for (let i=0; i < 3; i++){
    for (let j=0; j < 3; j++){
      board.insertAdjacentHTML("beforeend", `
        <div class="tile" data-x=${j} data-y=${i} id="piece${counter}"></div>
        `)
        counter += 1 
        //j = pictures[counter] 
        // j = puzzle_piece[j] , i = puzzle_piece[i]
    }
  }
}
function smartCounting(){
  let count = document.getElementById('move number')
  counting = parseInt(count.innerText)
  count.innerHTML =  counting + 1
}

function renderBot(targetPosition){
  const tiles = document.querySelectorAll(".tile")

  const newTile = tiles.find(function(tile){
    return parseInt(tile.dataset.x) === targetPosition.x && parseInt(tile.dataset.y) === targetPosition.y
  })
  if (!newTile){
    return false
  } else {
    if (prevTile){
      smartCounting()
      prevTile.id = newTile.id
      //prevTile.img = newTile.img

    } 

    newTile.id = "empty"
    prevTile = newTile

    return true
  }

}

function move(direction){
  let x = currentPosition.x;
  let y = currentPosition.y;
  switch(direction){
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
  if (moved){
    currentPosition = { x, y }
  }
}



