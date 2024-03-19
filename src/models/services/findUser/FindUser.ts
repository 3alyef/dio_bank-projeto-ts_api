import { AccountTable } from "../../DB/AccountTable/AccountTable";


export const findUser = async (email: string, password: string)=>{
    try {
        const user = await AccountTable.findAll(
            {
                where: {
                    email: email,
                    password: password
                }
            }   
        )
        if(user.length != 0){
            return { autorizado: true, data: user }
        } else {
            return { autorizado: false, data: null }
        }
    } catch(error){
        console.log(error)
        return { autorizado: false, data: null }; 
    }

}