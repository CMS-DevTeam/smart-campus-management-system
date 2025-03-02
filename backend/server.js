const express = require("express");
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
const systemAdministratorRoute = require('./routes/systemAdministrator.route');



const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

dotenv.config();

app.listen(5000, () => {
    connectDB();
    console.log('Server started at http://localhost:5000');
    
});  

