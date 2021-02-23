import {TransactionController} from "../contollers/Transaction.controller";

export const Routes = [{
    method: "get",
    route: "/transactions",
    controller: TransactionController,
    action: "all"
}, {
    method: "post",
    route: "/transactions",
    controller: TransactionController,
    action: "save"
}, {
    method: "delete",
    route: "/transactions/:id",
    controller: TransactionController,
    action: "remove"
}];