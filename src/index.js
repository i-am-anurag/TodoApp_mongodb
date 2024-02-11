const express = require('express');
const bodyParser = require('body-parser');

const {connect,PORT} = require('./config/serverConfig');

const appRoutes = require('./routes/index');
const {Task} = require('./services/temp');

const app = express();

const serverStart = ()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',appRoutes);
    
    
    app.listen(PORT,async()=>{
        console.log('Server is running on a port No:',PORT);
        await connect();
        console.log("Mongo db is connect");
        // const taskObj = await Task.init();
        const task = new Task();
        new Task();
        new Task();
        new Task();
        new Task();
        new Task();
        // const task2 = new Task();

    });
}

serverStart();