import express from 'express';
import saludoRoutes from './routes/saludo.routes';
import { logger } from './middlewares/logger';
import saludopersonalizado  from './routes/saludopersonalizado.routes';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(logger);
app.use('/api', saludoRoutes);
app.use('/api',saludopersonalizado);
app.listen(PORT, () => {
 console.log(`Servidor en http://localhost:${PORT}`);
});