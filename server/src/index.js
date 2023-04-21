const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const {PORT} = require('./config/serverConfig');

const startServer = async() => {
 app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);
 })
};

startServer();

