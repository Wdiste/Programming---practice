function findUniq(arr) {
    let numSet = [...new Set(arr)];
    if(numSet[0] === arr[1]) {
        return numSet[1];
    } if(numSet[0] === arr[2]) {
        return numSet[1];
    } return numSet[0];
};
console.log(findUniq([1,0,0]));
//   There is an array with some numbers. All numbers are equal except for one. Try to find it!
//   It’s guaranteed that array contains at least 3 numbers.

// voted best practice
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }