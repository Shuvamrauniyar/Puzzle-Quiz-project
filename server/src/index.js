const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routers/index');



const startServer = async() => {
 app.listen(PORT,async ()=>{
   app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',apiRoutes);
    console.log(`server is listening at ${PORT}`);
 })
};

startServer();

