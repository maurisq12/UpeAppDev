import { getConnection, sql } from '../database/connection.js'

export const getProducto = async (req, res) => {
    const {IDProducto} = req.body
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDProducto', sql.Int ,pIDProducto)
    .query("consultarProducto @pIDProducto");
    res.json(resp.recordset)
}

export const getProductos = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request()
    .query("consultarProductos");
    res.json(resp.recordset)
}

export const agregarProducto = async (req,res) =>{

    const {Nombre,Costo, Detalles, Fotografia, IDTipo} = req.body

    if(Nombre==null || Costo==null || Detalles==null || Fotografia==null || IDTipo==null ){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pNombre', sql.VarChar, Nombre)
    .input('pCosto',sql.Int,Costo)
    .input('pDetalles', sql.VarChar, Detalles)
    .input('pFotografia', sql.VarBinary, new Buffer.alloc(1))
    .input('pIDTipo',sql.Int,IDTipo)
    .query("agregarProducto @pNombre, @pCosto, @pDetalles, @pFotografia, @pIDTipo")

    return res.status(200).json({msg:"Realizado"})
}


export const editarCubiculo = async (req,res) =>{

    const {id,nombre,capacidad, estado} = req.body

    if(id==null || nombre==null || capacidad==null || estado==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('idCubiculo',sql.Int,id)
    .input('pNombre', sql.VarChar, nombre)
    .input('pEstado',sql.SmallInt,estado)
    .input('pCapacidad',sql.Int,capacidad)
    .input('pTiempoMáximo',sql.Time, Date.parse("00:00:00"))
    .query("modificarCubiculo @idCubiculo, @pNombre, @pEstado, @pCapacidad, @pTiempoMáximo")

    res.json('prueba')
}
