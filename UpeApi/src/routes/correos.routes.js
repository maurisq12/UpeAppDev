import {Router} from 'express'
import {enviarCorreoRegistro} from '../controllers/correos.controller.js'


const routerC = Router();

routerC.get('/correos', enviarCorreoRegistro)


export default routerC;

