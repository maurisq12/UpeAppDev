import {Router} from 'express'
import {getProducto,getProductos, editarCubiculo, agregarProducto, } from '../controllers/productos.controller.js'

const routerC = Router();

routerC.get('/productos/todos', getProductos)
routerC.get('/productos/uno', getProducto)
routerC.post('/productos/edit', editarCubiculo)
routerC.post('/productos/new', agregarProducto)


export default routerC;