import express from "express";
import config from './config.js'
import productosRoutes from './routes/productos.routes.js'
import vendedoresRoutes from './routes/vendedores.routes.js'
import correosRoutes from './routes/correos.routes.js'
import loginRoutes from './routes/login.routes.js'


const app = express()


// configuración 
app.set('port', config.port)

//midddlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))




app.use(productosRoutes)
app.use(vendedoresRoutes)
app.use(correosRoutes)
app.use(loginRoutes)

export default app