const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI)
	.then(()=>{
		console.log("conexion exitosa");
	})
	.catch((error)=>{
		console.log(error);	
	})
