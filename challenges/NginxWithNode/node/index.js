const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values ('Rodrigo Martins')`
connection.query(sql)
connection.end()

app.get('/', (req, res)=>{

    const mysql = require('mysql')
    const connection = mysql.createConnection(config)
    const q = `SELECT name FROM people;`
    connection.query(q, (err,rows) => {
        if(err) throw err;

        var html = "<h1> FullCycle Rocks!!!</h1><br>Lista de nomes cadastrada no banco de dados"

        rows.forEach( (row) => {
            html = html + "<p>" + row.name + "</p>" 
        });

        res.send(html)
    });
    connection.end()

})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})