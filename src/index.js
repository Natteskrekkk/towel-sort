
// You should implement your task here.

module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length === 0) {
    return [];
  }

  let finalArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isEven(i)) {
        finalArray.push(matrix[i][j]);
      } else {
        let countFromEnd = matrix[i].length - j - 1;
        finalArray.push(matrix[i][countFromEnd]);
      }
    }
  }
  return finalArray;
}

function isEven(index) {
  return index % 2 === 0;
}



// towelSort([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])