import { IRepository } from "./IRepository";
import { Cliente } from "../Entities/Cliente";

export class UnitOfWork {

    private _url: String = "";

    public Clientes: IRepository<Cliente>;

    constructor() {
        //this.Clientes = new ;
    }

}