import { getConnection, sql } from '../database/connection.js'

export const getTipoProducto = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request()
    .query("consultarTipoProducto");
    res.json(resp.recordset)
}


export const getProducto = async (req, res) => {
    const {IDProducto} = req.body
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDProducto', sql.Int ,IDProducto)
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
    const resp= await pool.request()
    .input('pNombre', sql.VarChar, Nombre)
    .input('pCosto',sql.Int,Costo)
    .input('pDetalles', sql.VarChar, Detalles)
    .input('pFotografia', sql.VarBinary, new Buffer.alloc(1))
    .input('pIDTipo',sql.Int,IDTipo)
    .query("agregarProducto @pNombre, @pCosto, @pDetalles, @pFotografia, @pIDTipo")
    let IDAgregado = resp.recordset[0].Agregado;

    pool.request()
    .input('pIDProducto',sql.Int,IDAgregado)
    .input('pIDVendedor',sql.Int,1)
    .query("agregarProductoAVendedor @pIDProducto,@pIDVendedor")

    return res.status(200).json({msg:"Realizado"})
}


export const modificarProducto = async (req,res) =>{

    const {IDProducto,Nombre,Costo, Detalles, Fotografia, IDTipo} = req.body

    if(IDProducto==null || Nombre==null || Costo==null || Detalles==null || Fotografia==null || IDTipo==null ){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pIDProducto',sql.Int,IDProducto)
    .input('pNombre', sql.VarChar, Nombre)
    .input('pCosto',sql.Int,Costo)
    .input('pDetalles', sql.VarChar, Detalles)
    .input('pFotografia', sql.VarBinary, new Buffer.alloc(1))
    .input('pIDTipo',sql.Int,IDTipo)
    .query("editarProducto @pIDProducto ,@pNombre, @pCosto, @pDetalles, @pFotografia, @pIDTipo")

    return res.status(200).json({msg:"Realizado"})
}

export const eliminarProducto = async (req, res) => {

    const {IDProducto} = req.body

    if(IDProducto==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const con2 = await getConnection();
    con2.request()
    .input('pIDProducto',sql.Int,IDProducto)
    .query("eliminarProducto @pIDProducto");

    //eliminar producto del catalogo del vendedor
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDProducto',sql.Int,IDProducto)
    .query("eliminarProductoAVendedor @pIDProducto");

    //eliminar el producto de la bd
    

    console.log("si")

    return res.status(200).json({msg:"Realizado"})

}



