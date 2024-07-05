document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('div');
    let gridSize = 16;

    function clearGrid() {
        // Remove all child elements (rows) from gridContainer
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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

        const randomColorButton = document.getElementById("random-color-button")
        randomColorButton.addEventListener("click", () => {
            gridItems.forEach((item) => {
                item.addEventListener("mouseover", () => {
                    item.style.backgroundColor = getRandomColor();
                });
            });
        })

        const eraseButton = document.getElementById("erase-button")
        eraseButton.addEventListener("click", () => {
            gridItems.forEach((item) => {
                item.addEventListener("mouseover", () => {
                    item.style.backgroundColor = "rgb(247, 235, 217)";
                });
            });
        })
    }

    createGrid(gridSize);

    const body = document.querySelector("body");
    const curSize = document.createElement("p");
    curSize.className = "curSize";
    curSize.textContent = "Current Grid Size: " + gridSize + " x " + gridSize;
    body.appendChild(curSize);

    const changeSize = document.querySelector("button");
    changeSize.addEventListener("click", () => {
        gridSize = prompt("Enter a grid size between 1-100");
        if (parseInt(gridSize) >= 1 && parseInt(gridSize) <= 100) {
            clearGrid();
            createGrid(gridSize);
            curSize.textContent = "Current Grid Size: " + gridSize + " x " + gridSize;
        } else {
            alert("Please enter a vaue between 1-100")
        }
    })

    const clearButton = document.getElementById("clear-button")
    clearButton.addEventListener("click", () => {
        clearGrid();
        createGrid(gridSize);

    })


});
