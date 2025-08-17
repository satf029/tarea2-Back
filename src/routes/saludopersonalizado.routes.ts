import { Router } from 'express';
import { saludoPersonalizado } from '../controllers/saludoPersonalizado.controller';
const router = Router();
router.get('/saludar/:nombre',saludoPersonalizado);
export default router;