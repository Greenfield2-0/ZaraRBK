import express, { Router} from 'express';
import { getAllProd,getprod,postProd,updateProd,delProd,getoneProd,getCat,getSub,getSubSub} from '../controller/products';

const router: Router = express.Router();

router.get('/',getAllProd);
router.get('/:id',getprod);
router.get('/one/:prodname',getoneProd);
router.get('/all/:prodcat',getCat);
router.get('/all/sub/:prodsub',getSub);
router.get('/all/subsub/:prodsubsub',getSubSub);
router.post('/',postProd);
router.put('/:id',updateProd);
router.delete('/:id',delProd);

export default router;