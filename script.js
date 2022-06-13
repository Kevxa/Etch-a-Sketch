function newGrid(numberCells){
    numberCells = numberCells || 16;
    let cellWidth =  40/numberCells + "rem";
    let cellHeight = 40/numberCells +"rem";
    let divArr = [];
    let container = document.querySelector("#container");
    const colorPicker = document.querySelector("#colorPicker");
        for (i = 0; i < numberCells; i++){
        divArr[i] = document.createElement("div");
        container.appendChild(divArr[i]);
        for (j = 0; j < numberCells; j++){
            const newDiv = document.createElement("div");
            newDiv.classList.add("cellBox");
            newDiv.addEventListener("mouseover", e => e.target.style.backgroundColor = colorPicker.value);
            newDiv.style.width = `${cellWidth}`;
            newDiv.style.height = `${cellHeight}`;
            divArr[i].appendChild(newDiv);
        }
     }
    

}

function resetGrid() {
    
    let promptNumber = prompt("How many squares per side? (Maximum: 100)")
    let numberCells = parseInt(promptNumber, 10)
    if (isNaN(numberCells)) {
        window.alert("You must enter a right Number. (Maximum: 100)");
        return;
    }
    else if (numberCells <= 0) {
        window.alert("You must enter a right Number. (Maximum: 100)");
        return;
    }
    else if (numberCells > 100) {
        window.alert("You must enter a right Number. (Maximum: 100)");
        return;
    }
    const mainContainerDiv = document.getElementById("container");
    while (mainContainerDiv.firstChild) mainContainerDiv.removeChild(mainContainerDiv.firstChild);
    
    newGrid(numberCells);

}

function clearToggle(){
    let cell = document.querySelectorAll(".cellBox");
    cell.forEach((items) => {
        items.style.backgroundColor = "white";
    });    
}





newGrid();




