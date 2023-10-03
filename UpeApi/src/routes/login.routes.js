import {Router} from 'express'
import {verificarCorreo,iniciarSesion} from '../controllers/login.controller.js'


const routerL = Router();

routerL.get('/login/verificar', verificarCorreo)
routerL.post('/login/iniciar', iniciarSesion)





export default routerL;