import app from "./app.js"


app.listen(app.get('port'))





console.log("Usando el puerto", app.get('port'))