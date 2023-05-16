import express, { Express, json, urlencoded } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Import products route
// import orders route
// import users route
// use path for controller methods

export default app;
