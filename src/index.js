const express = require('express');
const bodyParser = require('body-parser');

const {connect,PORT} = require('./config/serverConfig');

const approutes = require('./routes/app-routes');


const serverStart = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/',approutes);
    
    app.listen(PORT,async()=>{
        console.log('Server is running on port No:',PORT);
        await connect();
        console.log("Mongo db is connected");

    });
}

serverStart();