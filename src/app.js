const express=require('express');
const path=require('path');
const dotenv=require('dotenv');
dotenv.config({path:path.resolve(__dirname,'./env/.env')});
const session=require('express-session');
const morgan=require('morgan');
const portToUse=3312

//Initialized express
const app=express();

//Settings
app.set('view engine','ejs');
app.set('port',process.env.PORT||portToUse);
app.set('views',path.join(__dirname,'views'));

//Middlewares
app.use(morgan('dev'));
app.use(session({
    secret:'secretKey',
    resave:true,
    saveUninitialized:true
}));
app.use(express.urlencoded({extended:false}));

//Static files:

app.use(express.static(path.join(__dirname,'public')));

//Add the connections:
const connections=require('./database/db')
app.use(connections);


//Routes
const routes=require('./routes/routes');
app.use('/',routes);

app.listen(app.get('port'),()=>{
    let message='The server is running in http://localhost:3312/'
    console.log(message)
})

