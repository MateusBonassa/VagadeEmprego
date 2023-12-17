const express = require("express");
const app = express();
const cors = require('cors');

const vagasRoutes =require( "./routes/vagasRoutes.js");


app.use(express.urlencoded({extended: true }))

app.use(express.json())
app.use(cors());
app.use(vagasRoutes);

app.listen(8081, function(){
     console.log("Servidor na porta 8081");
});

