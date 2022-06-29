const express = require('express');
const hbs = require("hbs");
require("dotenv").config();
const app = express();
require("./database/conexion.js");
const {join} = require("path");

const port = process.env.PORT || 3000;

app.set("view engine",".hbs");
app.set("views","./views");
app.set('view options', { 
	layout: './layouts/main'
});

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({extended:true}));

app.use("/",require("./routes/home.route.js"));
app.use("/auth",require("./routes/auth.route.js"));

app.use(express.static(join(__dirname,"public")));

app.get("*",(req,res)=>{
	res.send("Page Not Found | 404");
});

app.listen(port,()=>{
	console.clear();
	console.log(`corriendo en el puerto ${port}`);
});


