import {Router} from 'express'
import {getZonasVendedor,getProvincias,getCantones,getDistritos,agregarZonaAVendedor,eliminarZonaAVendedor } from '../controllers/zonas.controller.js'

const routerZ = Router();

routerZ.get('/zonas/uno', getZonasVendedor)
routerZ.get('/zonas/provincias', getProvincias)
routerZ.get('/zonas/cantones', getCantones)
routerZ.get('/zonas/distritos', getDistritos)
routerZ.post('/zonas/add', agregarZonaAVendedor)
routerZ.post('/zonas/delete', eliminarZonaAVendedor)


export default routerZ;