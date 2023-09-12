import {Router} from 'express'
import {getZonasVendedor,getProvincias,getCantones,getDistritos,agregarZonaAVendedor,eliminarZonaAVendedor } from '../controllers/zonas.controller.js'

const routerZ = Router();

routerZ.post('/zonas/uno', getZonasVendedor)
routerZ.post('/zonas/provincias', getProvincias)
routerZ.post('/zonas/cantones', getCantones)
routerZ.post('/zonas/distritos', getDistritos)
routerZ.post('/zonas/add', agregarZonaAVendedor)
routerZ.post('/zonas/delete', eliminarZonaAVendedor)


export default routerZ;