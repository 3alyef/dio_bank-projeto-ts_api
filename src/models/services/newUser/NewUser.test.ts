import { newUser } from "./NewUser";
import { AccountTable } from "../../DB/AccountTable/AccountTable";

describe('newUser.ts', ()=>{

    
    it('should create a new user on database', async ()=>{
        const name = 'alef';
        const email = 'alef@gmail.com';
        const password = '123456';

    
    
        // Mock da função 'create' da AccountTable
        const createMock = jest.fn().mockResolvedValue({
            save: jest.fn().mockResolvedValue({}),
            toJSON: jest.fn().mockReturnValue({})
        });
        AccountTable.create = createMock;
    
        /* O que está acontecendo aqui é que quando (no contexto de test) o jest import newUser, dentro de newUser será usado saveMock no lugar de save (quando for chamado o metodo save é claro). 
        
        (parei em verificar o que é o mockResolvedValue)
        */
    

        AccountTable.create = createMock;

        // Chamar a função de criação de usuário
        const result = await newUser(name, email, password);

        // Verificar se a função de criação foi chamada corretamente
        expect(createMock).toHaveBeenCalledWith({
            name,
            email,
            password,
            behance: '0'
        });

        // Verificar se o resultado é verdadeiro (indicando que o usuário foi criado com sucesso)
        expect(result).toBe(true);
    })
})