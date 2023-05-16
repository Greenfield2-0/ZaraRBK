
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
    // export const getOneorder=(req, res) => {
    //     getOne(req.params.id)
    //      .then((result) => {
    //        res.send(result);
    //      })
    //      .catch((error) => {
    //        res.status(500).send(error);
    //      })}


