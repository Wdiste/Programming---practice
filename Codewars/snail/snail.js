// Snail Sort
// Given an n x n array, return the array elements arranged from 
// outermost elements to the middle element, traveling clockwise

// 0,0 0,1 0,2 1,2 2,2 2,1 2,0 1,0 1,1

function snail(shell) {
    let x = 0, y = 0, xMin = 0, xMax = shell[0].length, yMin = 0, yMax = shell.length - 1;
    let newArr = [];
    while (newArr.length < shell.length * shell[0].length) {
        for (y; y < yMax; y++) {
            newArr.push(shell[x][y]);
            console.log(x, y);
        }
        for (x; x < xMax; x++) {
            newArr.push(shell[x][y]);
            console.log(x, y);
        }
        for (y = yMax; y >= yMin; y--) {
            newArr.push(shell[x][y]);
            console.log(x, y);
        }
        y++;
        x--;
        xMin++;
        for (x; x > xMin; x--) {
            newArr.push(shell[x][y]);
            console.log(x, y);
        }
        y++;
    }
    return newArr;
}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));