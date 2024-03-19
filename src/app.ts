import express, { Request, Response, NextFunction, response } from "express";
import { router } from "./routes/router";
const cors = require("cors");

export class App {
    // public server = express.application; // server, quando instânciado, torna-se um servidor
    public server;

    constructor() {
        this.server = express();
        this.middleware();
        this.middlewareLogin();
        this.router();
    };

    private middleware = () =>{
        // Adiciona o middleware express.json() para fazer o parse do corpo da requisição
        this.server.use(express.json());
    };


    private middlewareLogin = () =>{
        // Libera todos os acessos
        this.server.use(cors());

    };

    private router = () =>{
        // Adiciona as rotas definidas no objeto router à aplicação
        this.server.use(router);
    }
}