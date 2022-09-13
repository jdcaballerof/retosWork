matrix2 = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

matrix1 = [
  [1, 0, 3],
  [0, 2, 1],
  [1, 2, 0],
];

const Cuartitos = (matrix) =>{

let sum = 0;

for (let i = 0; i < matrix.length - 1; i++) {
  let fila = matrix[i];
  for (let j = 0; j < fila.length; j++) {
    let item = fila[j];
    if (matrix[i][j] == 0) {
      matrix[i + 1][j] = 0;
    } else sum += matrix[i][j];
  }
}

return sum
}



console.log(Cuartitos(matrix1))