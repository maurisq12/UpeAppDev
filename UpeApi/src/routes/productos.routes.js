import {Router} from 'express'
import {getProducto,getProductos, modificarProducto, agregarProducto, eliminarProducto } from '../controllers/productos.controller.js'

const routerC = Router();

routerC.get('/productos/todos', getProductos)
routerC.get('/productos/uno', getProducto)
routerC.post('/productos/edit', modificarProducto)
routerC.post('/productos/new', agregarProducto)
routerC.post('/productos/delete', eliminarProducto)


export default routerC;