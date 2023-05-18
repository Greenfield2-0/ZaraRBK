
import { Request, Response } from 'express';
import {
    getAll,
    getOne,
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
    getOne(req.params.prodname)
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


