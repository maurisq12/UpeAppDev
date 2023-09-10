import sql from 'mssql'

const dbSettings = {
    user: "maurisq1201_SQLLogin_2",
    password: "minr1t3ase",
    server: "UpeAppDB.mssql.somee.com",
    database: "UpeAppDB",
    options: {
        trustServerCertificate: true,
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    }
    catch (error) {
        console.error(error);
    }

}

export {sql};
