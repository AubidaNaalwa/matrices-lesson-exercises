/* Write your code below */
class Matrix{
    constructor(numRows, numColumns){
        this.matrix =  Matrix.generateMatrix(numRows, numColumns)
        this.row = numRows
        this.col = numColumns
    }

    static generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    print(){
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
              console.log(this.matrix[r][c])
            }
        }
    }

    printColumn(num){
        if(num >=0 && num < this.col)
            for (let r = 0; r < this.row; r++)
                console.log(this.matrix[r][num])
            
    }

    alter(i,j ,value){
        if(i < this.row && j <this.col && j>=0 && i>=0)
          this.matrix[i][j] = value
    }

    printRow(num){
        if(num >=0 && num < this.row)
            for (let r = 0; r < this.col; r++)
                console.log(this.matrix[num][r])
            
    }

    get(i, j){
        if(i < this.row && j <this.col && j>=0 && i>=0)
             return this.matrix[i][j]
    }

    findCoordinate(num){
        for (let r = 0; r < this.row; r++) {
            for (let c = 0; c < this.col; c++) {
              if(this.matrix[r][c] == num){
                  return {x:c ,y :r}
              }
            }
        }
    }
}


//You can paste the code from the lesson below to test your solution


let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0)

console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) 
// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

/* Do not remove the exports below */
module.exports = Matrix