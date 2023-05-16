import express, { Router} from 'express';
import { getAllOrders } from '../controller/orders';

const router: Router = express.Router();

router.get('/',getAllOrders);

export default router;
