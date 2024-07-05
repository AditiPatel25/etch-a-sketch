document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('div');
    let gridSize = 16;

    function clearGrid() {
        // Remove all child elements (rows) from gridContainer
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }

    function createGrid(gridSize) {
        for (let i = 0; i < gridSize; i++) {
            row = document.createElement("div");
            gridContainer.appendChild(row);
            row.className = "row";
            for (let j = 0; j < gridSize; j++) {
                square = document.createElement("div");
                row.appendChild(square);
                square.className = "gridItem";
                // squares adjust to size of set width
                square.style.width = "100%";
                let height = 500 / parseInt(gridSize);
                square.style.height = `${height}px`;
            }
        }
        const gridItems = document.querySelectorAll('.gridItem');

        gridItems.forEach((item) => {
            item.addEventListener("mouseover", () => {
                item.style.backgroundColor = 'pink'; 
            });

        });
    }

    createGrid(gridSize);

    const body = document.querySelector("body");
    const curSize = document.createElement("p");
    curSize.className = "curSize";
    curSize.textContent = "Current Grid Size: " + gridSize + " x " + gridSize; 
    body.appendChild(curSize);

    const changeSize = document.querySelector("button");
    changeSize.addEventListener("click", () => {
        let size = prompt("Enter a grid size between 1-100");
        if (parseInt(size) >= 1 && parseInt(size) <= 100) {
            clearGrid();
            createGrid(size);
            curSize.textContent = "Current Grid Size: " + size + " x " + size; 
        } else {
            alert("Please enter a vaue between 1-100")
        }
    })
});
