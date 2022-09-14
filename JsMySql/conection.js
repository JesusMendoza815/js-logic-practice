const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cursos'
})

connection.connect((err) => {
    if(err) throw err
    console.log('Conexion exitosa');
})

connection.query('SELECT * FROM usuarios',(err, rows) => {
    if(err) throw err
    console.log('Los datos son: ')
    console.log(rows);
})