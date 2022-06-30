const { URL } = require("url");

const urlValidar = (req,res,next) => {
    try {
        const { origin } = req.body;
        const urlFront = new URL(origin);
        if (urlFront.origin) {
            return next();
        } else {
            throw new Error("URL no valida");
        }
    } catch (error) {
        res.send(error);   
    }
}

module.exports = urlValidar