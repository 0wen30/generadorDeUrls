const { nanoid } = require("nanoid");

const Url = require("../models/urls.model.js")

const redireccionamiento = async (req,res) => {
	try {
		const urlDB = await Url.findOne({shortURL:req.params.shorturl});
		if (!urlDB?.origin) throw new Error("No existe el redireccionamiento");
		res.redirect(urlDB.origin);
	} catch (error) {
		res.send("error algo fallo")
	}
}

const modificarURLs = async(req,res)=>{
	try {
		const { origin } = req.body;
		console.log(origin)
		await Url.findByIdAndUpdate(req.params.id,{origin});
		res.redirect("/");
	} catch (error) {
		res.send(error)
	}
}

const actualizarURLs = async(req,res)=>{
	try {
		const urltoEdit = await Url.findById(req.params.id).lean();
		res.render("home",{urltoEdit});
	} catch (error) {
		res.send("error algo fallo")
	}
}

const eliminarURLs = async(req,res)=>{
	try {
		await Url.deleteOne({_id:req.params.id});
		res.redirect("/");
	} catch (error) {
		res.send("error algo fallo")
	}
}

const leerURLs = async(req,res)=>{
	try {
		const urls = await Url.find().lean();
		res.render("home",{urls});
	} catch (error) {
		res.send("error algo fallo")
	}
}

const agregarURLs = async(req,res)=>{
	try {
		const { origin } = req.body;
		const url = new Url({origin,shortURL:nanoid(6)})
		await url.save()
		res.redirect("/")	
	} catch (error) {
		res.send("error algo fallo")	
	}
}

module.exports = {
	leerURLs,
	agregarURLs,
	eliminarURLs,
	actualizarURLs,
	modificarURLs,
	redireccionamiento
}
