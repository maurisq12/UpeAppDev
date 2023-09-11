import {Router} from 'express'
import {verificarCorreo,iniciarSesion} from '../controllers/login.controller.js'


const routerL = Router();

routerL.get('/login/verificar', verificarCorreo)
routerL.get('/login/iniciar', iniciarSesion)





export default routerL;