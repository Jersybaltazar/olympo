const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootleon',
    database: 'olympo'
})

// connection.connect()
// connection.query('SELECT 1+1 AS SOLUCION',(err, rows, fields)=>{
//     if (err)throw err 
//     console.log('The slución is:', rows[0].solution)

// })
// connection.end()
connection.connect((err)=>{
    if (err) {
        console.error('Error al conectarse a la base de datos', err)
    return;
    }
    console.log('conexion exitosa  ')
    connection.end();
})
