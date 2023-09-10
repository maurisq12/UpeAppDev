import axios from 'axios'
import { getConnection,sql } from '../database/connection.js'
import {enviarCorreoRegistro } from '../controllers/correos.controller.js'






export const registrar = async (req,res) =>{

    const {pCedula,pCarne, pNombre, pApellido1, pApellido2, pFechaNacimiento, pCorreo, pContrasena} = req.body

    if(pCedula==null || pCarne==null || pNombre==null || pApellido1==null || pApellido2==null || pFechaNacimiento==null || pCorreo==null || pContrasena==null ){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    pool.request()
    .input('pCedula',sql.Int,pCedula)
    .input('pCarne',sql.Int,pCarne)
    .input('pNombre', sql.VarChar, pNombre)
    .input('pApellido1', sql.VarChar, pApellido1)
    .input('pApellido2', sql.VarChar, pApellido2)
    .input('pFechaNacimiento',sql.Date, pFechaNacimiento)
    .input('pCorreo', sql.VarChar, pCorreo)
    .input('pContrasena', sql.VarChar, pContrasena)
    .query("agregarEstudiante @pCorreo, @pContrasena, @pCedula, @pCarne, @pNombre, @pApellido1, @pApellido2, @pFechaNacimiento")


    res.json('prueba')

}

export const verificarCorreo= async (req,res) =>{

    const {pCorreo} = req.body

    if(pCorreo==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    const resp= await pool.request()
    .input('pCorreo', sql.VarChar, pCorreo)
    .query("SELECT Nombre, correo FROM Estudiantes WHERE correo=@pCorreo")

    res.json(resp.recordset.length)
}