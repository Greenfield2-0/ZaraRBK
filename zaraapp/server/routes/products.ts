import express, { Router} from 'express';
import { getAllProd,getprod,postProd,updateProd,delProd} from '../controller/products';

const router: Router = express.Router();

router.get('/',getAllProd);
router.get('/:id',getprod);
router.post('/',postProd);
router.put('/:id',updateProd);
router.delete('/:id',delProd);

export default router;