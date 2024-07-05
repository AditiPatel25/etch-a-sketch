document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('div');

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
                let height = 400 / parseInt(gridSize); 
                square.style.height = `${height}px`;
            }
        }
    }

    createGrid(23);
});