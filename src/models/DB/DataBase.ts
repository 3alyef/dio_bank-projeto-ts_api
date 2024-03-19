import { Sequelize, DataTypes, Model } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

//const dbName:string = String(process.env.DB_NAME);
const dbUser:string = String(process.env.DB_USER);
const dbName:string = 'dio_bank_projeto_ts_api';
const dbPassword = process.env.DB_PASSWORD || "undefined";
const dbHost = process.env.DB_HOST || "localhost";


const sequelize = new Sequelize ( // It do Authentication on Data-base
    dbName, 
    dbUser, 
    dbPassword, 
    {
        host:dbHost,
        dialect:"mysql",
        define: {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        }
    }      
);

const authenticateDB = async () => { // Confirm the authentication validation on Data-base
    try {
        await sequelize.authenticate();
        console.log("Conexão bem-sucedida!");
    } catch (error) {
        console.error(`Erro na conexão: ${error}`);
    }

    //await listAllAccounts()
    
};


/*

const listAllAccounts = async () => {
    try {
        // Consulta o banco de dados para encontrar todos os registros na tabela
        const accounts = await sequelize.models.account_authenticates;

        // Retorna os registros encontrados
        console.log(accounts)
    } catch (error) {
        // Trate os erros de consulta conforme necessário
        console.error('Erro ao listar contas:', error);
        throw error; // ou retorne null ou outro valor de erro
    }
};

*/

export { Sequelize, sequelize, DataTypes, Model, authenticateDB }