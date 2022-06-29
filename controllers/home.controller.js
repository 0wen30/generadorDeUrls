const leerURLs = async(req,res)=>{
	const urls = [
		{origin:"www.google.com",shortURL:"uno"},
		{origin:"www.facebook.com",shortURL:"dos"},
		{origin:"www.youtube.com",shortURL:"tres"},
		{origin:"www.twitter.com",shortURL:"cuatro"}
	]
	res.render("home",{urls});
}

const agregarURLs = async(req,res)=>{
	res.render("home",{urls});
}

module.exports = {
	leerURLs,
	agregarURLs
}