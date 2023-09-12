import { getConnection, sql } from '../database/connection.js'

export const getVendedor = async (req, res) => {
    const {IDVendedor} = req.body
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDVendedor', sql.Int ,IDVendedor)
    .query("consultarVendedor @pIDVendedor");
    res.json(resp.recordset)
}

export const getVendedores = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request()
    .query("consultarVendedores");
    res.json(resp.recordset)
}

export const agregarVendedor = async (req,res) =>{

    const {Nombres,Apellidos, CorreoElectronico,Contrasena, Contacto, Facebook, Instagram, Fotografia} = req.body

    if(Nombres==null || Apellidos==null || Contrasena==null || CorreoElectronico==null || Contacto==null || Facebook==null || Instagram==null || Fotografia==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pNombres', sql.VarChar, Nombres)
    .input('pApellidos', sql.VarChar, Apellidos)
    .input('pCorreoElectronico', sql.VarChar, CorreoElectronico)
    .input('pContrasena', sql.VarChar, Contrasena)
    .input('pContacto',sql.Int,Contacto)
    .input('pFacebook', sql.VarChar, Facebook)
    .input('pInstagram', sql.VarChar, Instagram)
    .input('pFotografia', sql.VarBinary, new Buffer.alloc(1))
    
    .query("agregarVendedor @pNombres,@pApellidos, @pCorreoElectronico, @pContrasena, @pContacto, @pFacebook, @pInstagram,@pFotografia")
    return res.status(200).json({msg:"Realizado"})
}

export const modificarVendedor = async (req,res) =>{

    const {IDVendedor,Nombres,Apellidos, CorreoElectronico, Contacto, Facebook, Instagram, Fotografia} = req.body

    if(IDVendedor==null || Nombres==null || Apellidos==null || CorreoElectronico==null || Contacto==null || Facebook==null || Instagram==null || Fotografia==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pIDVendedor',sql.Int,IDVendedor)
    .input('pNombres', sql.VarChar, Nombres)
    .input('pApellidos', sql.VarChar, Apellidos)
    .input('pCorreoElectronico', sql.VarChar, CorreoElectronico)
    .input('pContacto',sql.Int,Contacto)
    .input('pFacebook', sql.VarChar, Facebook)
    .input('pInstagram', sql.VarChar, Instagram)
    .input('pFotografia', sql.VarBinary, new Buffer.alloc(1))
    .query("editarVendedor @pIDVendedor,@pNombres,@pApellidos, @pCorreoElectronico, @pContacto, @pFacebook, @pInstagram, @pFotografia")

    return res.status(200).json({msg:"Realizado"})
}
