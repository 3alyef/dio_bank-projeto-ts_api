import { AccountTable } from "../../DB/AccountTable/AccountTable";

export const newUser = async (name: string, email: string, password: string) => {

    try {
        const newUs = await AccountTable.create({name: name, email: email, password: password, behance: '0'});
        console.log("Está salvo: "+await newUs.save());

        console.log('Dados inseridos com sucesso:', newUs.toJSON());

        return true
    } catch (error){
        console.log(error)
         
        return false
    }
     
}

//