require("dotenv").config()
const PORT = process.env.DB_PORT || 4000
import { App } from "./app";
import { authenticateDB } from "./models/DB/DataBase"
import { AccountTable } from "./models/DB/AccountTable/AccountTable";
//AccountTable.sync(); //To create a new table on database
//authenticateDB();

new App().server.listen(PORT, ()=>{
    console.log(`Link: http://localhost:${PORT}`)
    console.log("Running...")
})