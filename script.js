let rows = 3;
let colums =3;
let currentTile;
let otherTile; // blank tile 
let turns= 0; 
// let imgOrder = ['1', '2','3','4', '5', '6', '7', '8', '9']; 
let imgOrder = [ '4', '2', '7', '1', '3', '5', '8', '6', '9'];

window.onload = function(){
    for(let r =0; r < rows; r++){
        for(let c=0; c < colums; c++){

            //img id 0-0, 1-1 src="1.png, 2.png" > 
            let tile= document.createElement("img");
            tile.id= r.toString() + " - " + c.toString();  
            tile.src= imgOrder.shift() + ".png";
            console.log(tile.src);

        // DRAG and DROP

        tile.addEventListener("dragstart", dragStart) //click to drag
        tile.addEventListener("dragover", dragOver); // moving image around while click
        tile.addEventListener("dragenter", dragEnter); //drag img onto another one
        tile.addEventListener("dragleave", dragLeave); //dragged image leave 
        tile.addEventListener("drop", dragDrop); // drag over another image and let go
        tile.addEventListener("dragEnd", dragEnd); //after drag drop, wsap the 2 tiles 


        
        
        document.getElementById("board").append(tile);

        }

    }
}


