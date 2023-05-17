import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';
import routerUser from "./routes/users"
import routeOrder from '../server/routes/orders'
import routeProd from '../server/routes/products'
const app: Express = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
// Import products route

app.use('/api/orders',routeOrder)
app.use("/api/user",routerUser)
app.use("/api/products",routeProd)
// use path for controller methods

export default app;
