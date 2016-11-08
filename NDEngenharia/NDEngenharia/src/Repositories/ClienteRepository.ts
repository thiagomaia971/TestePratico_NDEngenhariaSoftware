/// <reference path="../../Scripts/jquery.d.ts" />
import { IRepository } from "./IRepository";
import { Cliente } from "../Entities/Cliente";

export class ClienteRepository /*extends IRepository<Cliente>*/{

    private url: string;

    constructor(url: string) {
        //super();
        this.url = url;
    }


    public getAll(): JQueryPromise<Array<Cliente>> {
        this.url = `${this.url}/Cliente/Todos`;

        return $.getJSON(this.url);

    }
    /*
    public getSingle(id: number): JQueryPromise<Cliente>{
        this.url = `${this.url}/Cliente/`
    }*/

}