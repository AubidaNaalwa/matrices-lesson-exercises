const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix{

    constructor(){
        super(0,0)
    }

    loadData(data){
        const keys = Object.keys(data[0])
        this.row = data.length
        this.col = keys.length
        this.matrix = Matrix.generateMatrix(this.row, this.col)

        for(let i =0 ;i< this.row ;i++)
            for(let j =0 ;j< this.col;j++)
                this.matrix[i][j] = data[i][keys[j]]
    }

}


let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()

module.exports = EmployeeMatrix