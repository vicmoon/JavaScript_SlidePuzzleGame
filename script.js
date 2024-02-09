let rows = 3;
let colums =3;
let currentTile;
let otherTile; // blank tile 
let turns= 0; 
// let imgOrder = ['1', '2','3','4', '5', '6', '7', '8', '9']; 
let imgOrder = [ '4', '8', '3', '2', '1', '5', '7', '6', '9'];

window.onload = function(){


    for(let r =0; r < rows; r++){
        for(let c=0; c < colums; c++){

            //img id 0-0, 1-1 src="1.png, 2.png" > 
            let tile= document.createElement("img");

            console.log(tile);
            tile.id= r.toString() + "-" + c.toString();  
            tile.src= imgOrder.shift() + ".png";
            
              // Add a class to the number 9 tile
              if (tile.src.includes("9.png")) {
                tile.classList.add("number_nine");
            }

        // DRAG and DROP

        tile.addEventListener("dragstart", dragStart) //click to drag
        tile.addEventListener("dragover", dragOver); // moving image around while click
        tile.addEventListener("dragenter", dragEnter); //drag img onto another one
        tile.addEventListener("dragleave", dragLeave); //dragged image leave 
        tile.addEventListener("drop", dragDrop); // drag over another image and let go
        tile.addEventListener("dragend", dragEnd); //after drag drop, wsap the 2 tiles 


        
        
        document.getElementById("board").append(tile);

        }

    }

    
}


function dragStart(){
currentTile = this; //the image being dragged; 
console.log(currentTile);

}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
   
}

function dragDrop(e) {
    e.preventDefault();
    otherTile = this; //the image tile being dropped on
    console.log(this);
}

function dragEnd(){

    if (!otherTile.src.includes("9.png")) { // 
        return;
    }
    
    // if (otherTile.src.includes("9.png")) {
    //     otherTile.style.border = "2px solid red";
    // } else {
    //     // Remove border from other tiles
    //     otherTile.style.border = "";
    // } 

    let currentCoords = currentTile.id.split("-"); //"0- 0" ->  ["0", "0 "]
    console.log(currentCoords);
    let r = parseInt(currentCoords[0]);
    let c= parseInt(currentCoords[1]); 

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]); 

    //check adjiacency 

    let moveLeft = r ==r2 && c2 == c-1 ; 
    let moveRight = r== r2 && c2 == c+1; 
    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c ==c2 && r2 == r+1; 

    let isAdjancent = moveLeft || moveRight || moveUp || moveDown;
  
    if(isAdjancent){
        let currentImg = currentTile.src;
        let otherImg = otherTile.src; 
        currentTile.src = otherImg;
        otherTile.src = currentImg; 
        
        // Apply red border to the tile representing number 9

 // Increment turns count
        turns += 1;
        document.getElementById("turns").innerHTML = turns;
  }

}


