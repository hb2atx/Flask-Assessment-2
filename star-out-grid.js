function starOutGrid(grid) {
    const rowsToStarOut = new Set();
    const colsToStarOut = new Set();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '*') {
                rowsToStarOut.add(i);
                colsToStarOut.add(j);
            }
        }
    }

    for (let row of rowsToStarOut) {
        for (let j = 0; j < grid[row].length; j++) {
            grid[row][j] = '*';
        }
    }
    for (let col of colsToStarOut) {
        for (let i = 0; i < grid.length; i++) {
            grid[i][col] = '*';
        }
    }

    return grid;
}

const originalGrid = [
    ['A', 'B', 'C'],
    ['D', '*', 'E'],
    ['F', 'G', 'H']
];

const resultGrid = starOutGrid(originalGrid);
console.log(resultGrid);

