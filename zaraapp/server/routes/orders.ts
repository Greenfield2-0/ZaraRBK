import express, { Router} from 'express';
import { getAllOrders ,getOneOrder,postOrder,updateOrder,delOrder} from '../controller/orders';

const router: Router = express.Router();

router.get('/',getAllOrders);
router.get('/:id',getOneOrder);
router.post('/',postOrder);
router.put('/:id',updateOrder);
router.delete('/:id')

export default router;
