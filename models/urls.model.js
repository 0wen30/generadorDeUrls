const { Schema, model } = require("mongoose");
const { nanoid } = require('nanoid');

module.exports = model("Urls", new Schema({
	origin:{
		type:String,
		unique:true,
		require:true
	},
	shortURL:{
		type:String,
		unique:true,
		require:true,
		default:nanoid(6)
	}
}));