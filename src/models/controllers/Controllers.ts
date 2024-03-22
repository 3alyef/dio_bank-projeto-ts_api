import { Response, Request } from "express";
import { newUser } from "../services/newUser/NewUser";
import { findUser } from "../services/findUser/FindUser";

class GlobalControler {

    public home(req:Request, res:Response) {
        return res.json({response:" שלום, מה שלומך היוםׁ? انا بخير! אا"})
    }
        
    public async cadastrar(req:Request, res:Response) {
        const { name, email, password } = req.body;
        // adiciona novo usuário ao database
        const novoUs: boolean = await newUser( name, email, password )

        if(novoUs) {
            res.status(201)
        } else {
            res.status(400) // bad request (error)
        }
        
    }

    public async login(req:Request, res:Response) {
        const { email, password } = req.body;

        // fazer requisição ao database
        
        const resp = await findUser(email, password);
        if(resp.autorizado) {
            console.log('Autorizado!');
            res.status(200);
            res.json(resp.data); // envia de volta um objeto com os dados do usuário
        } else {
            console.log('Negado!');
            res.status(401);
        }   
    }

    public async setBehance (req:Request, res:Response){

        const emailRemetente: string = req.params.emailRemetente;
        const passwordRemetente: string = req.params.passwordRemetente;
        const emailEnderaçado: string = req.params.emailEndereçado;

        const { emailRem, passwordRem, emailEnd} = req.body;
         

    }
}


export const globalControler = new GlobalControler()