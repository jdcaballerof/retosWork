matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]

matrix2 = [[1,0,3], 
           [0,2,1], 
           [1,2,0]]

let sum = 0;
const fila0 = matrix[0];


fila0.forEach( item0 => {
    sum += item0
});


for (let i = 0; i < matrix.length-1; i++) {
    let fila = (matrix[i])
    for (let j = 0; j < fila.length; j++){
        let item = fila[j]
        if(matrix[i][j] !== 0){
            sum += matrix[i+1][j]

        }
        
    }
}

console.log(sum)