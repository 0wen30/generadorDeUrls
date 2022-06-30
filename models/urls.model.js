const { Schema, model } = require("mongoose");

module.exports = model("Url", new Schema({
	origin:{
		type:String,
		unique:true,
		require:true
	},
	shortURL:{
		type:String,
		unique:true,
		require:true
	}
}));