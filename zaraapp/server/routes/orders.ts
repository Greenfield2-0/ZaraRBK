import express, { Router} from 'express';
import { getAllOrders ,getOneOrder,postOrder,updateOrder,delOrder} from '../controller/orders';

const router: Router = express.Router();

router.get('/all',getAllOrders);
router.get('/:id',getOneOrder);
router.post('/post',postOrder);
router.put('/:id',updateOrder);
router.delete('/:id')

export default router;
