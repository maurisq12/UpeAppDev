import axios from 'axios'
import { getConnection,sql } from '../database/connection.js'
import {enviarCorreoRegistro } from '../controllers/correos.controller.js'


export const verificarCorreo= async (req,res) =>{

    const {pCorreo} = req.body

    if(pCorreo==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    const resp= await pool.request()
    .input('pCorreo', sql.VarChar, pCorreo)
    .query("SELECT Nombre, correo FROM Estudiantes WHERE correo=@pCorreo")

}

export const iniciarSesion  = async (req,res) =>{

    const {CorreoElectronico, Contrasena} = req.body

    if(CorreoElectronico==null || Contrasena==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }


    const pool = await getConnection();
    const resp= await pool.request()
    .input('pCorreoElectronico', sql.VarChar, CorreoElectronico)
    .input('pContrasena', sql.VarChar, Contrasena)
    .query("iniciarSesion @pCorreoElectronico, @pContrasena")
    res.json(resp.recordset)



}