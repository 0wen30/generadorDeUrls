document.addEventListener('click',e=>{
    if (e.target.dataset.short) {
        const url = `http://localhost:5000/${e.target.dataset.short}`;
        navigator.clipboard
            .writeText(url)
            .then(d=>console.log("copiado en el portapapeles"))
            .catch(e=>console.log(e))
    }
})