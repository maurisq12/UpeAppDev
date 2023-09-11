import { getConnection, sql } from '../database/connection.js'

export const getZonasVendedor = async (req, res) => {
    const {IDVendedor} = req.body
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDVendedor', sql.Int ,IDVendedor)
    .query("consultarZonasAVendedor @pIDVendedor");
    res.json(resp.recordset)
}

export const getProvincias = async (req, res) => {
    const con = await getConnection();
    const resp= await con.request()
    .query("getProvincias");
    res.json(resp.recordset)
}

export const getCantones = async (req, res) => {
    const {IDProvincia} = req.body
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDProvincia', sql.Int ,IDProvincia)
    .query("getCantones @pIDProvincia");
    res.json(resp.recordset)
}

export const getDistritos = async (req, res) => {
    const {IDCanton} = req.body
    const con = await getConnection();
    const resp= await con.request()
    .input('pIDCanton', sql.Int ,IDCanton)
    .query("getDistritos @pIDCanton");
    res.json(resp.recordset)
}

export const agregarZonaAVendedor = async (req,res) =>{

    const {IDVendedor, IDZona} = req.body

    if(IDVendedor==null || IDZona==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    const resp= await pool.request()
    .input('pIDVendedor',sql.Int,IDVendedor)
    .input('pIDDistrito',sql.Int,IDZona)
    .query("agregarZonaAVendedor  @pIDDistrito,@pIDVendedor")

    return res.status(200).json({msg:"Realizado"})
}

export const eliminarZonaAVendedor = async (req,res) =>{

    const {IDVendedor, IDZona} = req.body

    if(IDVendedor==null || IDZona==null){
        return res.status(400).json({msg:"Bad request. Please fill all fields"})
    }

    const pool = await getConnection();
    const resp= await pool.request()
    .input('pIDVendedor',sql.Int,IDVendedor)
    .input('pIDDistrito',sql.Int,IDZona)
    .query("eliminarZonaAVendedor  @pIDDistrito,@pIDVendedor")

    return res.status(200).json({msg:"Realizado"})
}









