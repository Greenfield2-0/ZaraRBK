import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';
import routerUser from "./routes/users"
const app: Express = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
// Import products route
// import orders route
// import users route
app.use("/api/user", routerUser)
// use path for controller methods

export default app;
