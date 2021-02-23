import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Transaction } from "../db/models/Transaction.model";

export class TransactionController {

    private transactionRepository = getRepository(Transaction);

    async all(response: Response, next: NextFunction) {
        return this.transactionRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.transactionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.transactionRepository.save(request.body);
    }

    async remove(request: Request, next: NextFunction) {
        const transactionToRemove = await this.transactionRepository.findOne(request.params.id);
        await this.transactionRepository.remove(transactionToRemove);
        return this.transactionRepository.find();
    }
}