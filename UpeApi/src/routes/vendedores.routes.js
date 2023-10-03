import {Router} from 'express'
import {agregarVendedor, getVendedor, getVendedores, modificarVendedor,consultarVendedorDeProducto} from '../controllers/vendedores.controller.js'

const routerA = Router();

routerA.get('/vendedores/todos', getVendedores)
routerA.post('/vendedores/uno', getVendedor)
routerA.post('/vendedores/edit', modificarVendedor)
routerA.post('/vendedores/new', agregarVendedor)
routerA.post('/vendedores/producto', consultarVendedorDeProducto)


export default routerA;