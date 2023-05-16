
import { Request, Response } from 'express';
import {
    getAll,
    getOne,
    createOrder,
    changeOrder,
    deleteOrder
  } from '../models/orders';
  export const getAllOrders = (req: Request, res: Response) => {
    getAll()
      .then((result: any) => {
        res.send(result);
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  };
  export const getOneOrder = (req: Request, res: Response) => {
    getOne(req.params.id)
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  };
  export const postOrder = (req: Request, res: Response) => {
    createOrder(req.body)
      .then((result: any) => {
        res.status(201).send(result);
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  };
  export const updateOrder = (req: Request, res: Response) => {
    changeOrder(req.params.id,req.body)
      .then((result: any) => {
        res.status(200).send(result);
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  };
  export const delOrder = (req: Request, res: Response) => {
    deleteOrder(req.params)
      .then((result: any) => {
        res.status(204).send(result);
      })
      .catch((error: any) => {
        res.status(500).send(error);
      });
  };




