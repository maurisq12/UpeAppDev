import {Router} from 'express'
import {registrar,verificarCorreo} from '../controllers/login.controller.js'


const routerL = Router();

routerL.get('/registro/new', registrar)
routerL.get('/registro/verificar', verificarCorreo)




export default routerL;