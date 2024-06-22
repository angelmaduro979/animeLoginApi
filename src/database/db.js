const myconnection=require('express-myconnection');
const mysql=require('mysql');
const databaseInfo={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
}



const connection=myconnection(mysql,databaseInfo,'single');
module.exports=connection;