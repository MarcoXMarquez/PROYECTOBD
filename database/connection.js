import mysql from 'mysql2';

const connect = mysql.createConnection({
    host: 'JARVIS',
    user: 'admin',
    password: 'admin1234',  
    database: 'ventacigarrillos'
});

connect.connect(function(err){
    if(err){
        console.error("Error en la conexion"+err.stack);
    }
    console.log("Conexion exitosa" +connect.threadId);
});

export{connect};