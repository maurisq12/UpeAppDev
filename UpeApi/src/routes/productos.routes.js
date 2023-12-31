import {Router} from 'express'
import {getProducto,getProductos, modificarProducto, agregarProducto, eliminarProducto, getTipoProducto,getProductosVendedor, getProductosZona } from '../controllers/productos.controller.js'

const routerC = Router();

routerC.get('/productos/todos', getProductos)
routerC.post('/productos/vendedor', getProductosVendedor)
routerC.get('/productos/uno', getProducto)
routerC.get('/productos/tipos', getTipoProducto)
routerC.post('/productos/edit', modificarProducto)
routerC.post('/productos/new', agregarProducto)
routerC.post('/productos/delete', eliminarProducto)
routerC.post('/productos/zonas', getProductosZona)


export default routerC;