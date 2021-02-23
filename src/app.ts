import express from 'express';
import * as bodyParser from 'body-parser';
import './db/db'
import cors from 'cors';
import { Routes } from './routes/Transaction.routes';
import { Request, Response } from "express";

const app = express();
app.use(bodyParser.json());
app.use(cors());

Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

export { app };