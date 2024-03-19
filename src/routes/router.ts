import { Router } from "express";
import { globalControler } from "../models/controllers/Controllers";

const router:Router = Router();
router.get('/', globalControler.home)
router.post('/cadastrar', globalControler.cadastrar)
router.post('/login', globalControler.login)
router.post('/pagamento', globalControler.setBehance)
export { router }