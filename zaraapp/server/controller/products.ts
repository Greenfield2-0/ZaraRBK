
import { Request, Response } from 'express';
import {
    getAll,
    getOne,
    getOneCategory,
    getOneSubCategory,
    getOneSubSubCategory,
    getAllWithOrder,
    createProduct,
    changeProduct,
    deleteProduct
  } from '../models/products';
  export const getAllProd= (req: Request, res: Response) => {
    getAll()
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => {
        res.status(404).send(error);
      });
  };
  export const getoneProd= (req: Request, res: Response) => {
    console.log(req.params.prodname,'f ctrl')
    getOne(req.params.prodname)
 
      .then((result: any) => {
       
        res.send(result);
      })
      .catch((error: any) => {
        
        res.status(404).send(error);
      });
  };
  export const getCat= (req: Request, res: Response) => {
    getOneCategory(req.params.prodcat)
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => { 
        res.status(404).send(error);
      });
  };
  export const getSub= (req: Request, res: Response) => {
    getOneSubCategory(req.params.prodsub)
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => {    
        res.status(404).send(error);
      });
  };
  export const getSubSub= (req: Request, res: Response) => {
    getOneSubSubCategory(req.params.prodsubsub)
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => {  
        res.status(404).send(error);
      });
  };
  export const getprod = (req: Request, res: Response) => {
    getAllWithOrder(req.params.id)
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch((error: any) => {
        res.status(404).send(error);
      });
  };
  export const postProd = (req: Request, res: Response) => {
    createProduct(req.body)
      .then((result: any) => {
        res.status(201).send(result);
      })
      .catch((error: any) => {
        res.status(404).send(error);
      });
  };
  export const updateProd = (req: Request, res: Response) => {
    changeProduct(req.params.id,req.body)
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch((error: any) => {
        res.status(404).send(error);
      });
  };
  export const delProd = (req: Request, res: Response) => {
    deleteProduct(req.params)
      .then((result: any) => {
        res.status(204).send(result);
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  };


