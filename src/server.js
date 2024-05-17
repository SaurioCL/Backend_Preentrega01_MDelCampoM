import express from 'express';
import morgan from 'morgan';
import { __dirname } from './utils/path.js';
import cartsRouter from './routes/cartRouter.js';
import productsRouter from './routes/productRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

// Crear una instancia de Express
const app = express()
const PORT = 8080

// Middleware para el manejo de JSON
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'));

// Montar los routers en las rutas correspondientes
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});