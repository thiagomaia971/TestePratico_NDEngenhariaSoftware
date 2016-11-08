/// <reference path="../../Scripts/jquery.d.ts" />
import { IRepository } from "./IRepository";
import { Cliente } from "../Entities/Cliente";

export class ClienteRepository /*extends IRepository<Cliente>*/ {

    private url: string;

    constructor(url: string) {
        //super();
        this.url = url;
    }


    public getAll(): JQueryPromise<Array<Cliente>> {
        let _url: string = `${this.url}/Cliente/Todos`;

        return $.getJSON(_url);

    }

    public getSingle(id: number): JQueryPromise<Cliente> {
        let _url: string = `${this.url}/Cliente/Filtrar`;

        return $.ajax({
            method: "POST",
            url: _url,
            data: { id }
        });
    }

    public add(cliente: Cliente): JQueryPromise<Cliente> {
        let _url: string= `${this.url}/Cliente/Criar`;

        return $.ajax({
            method: "POST",
            url: _url,
            data: { cliente }
        })
    }

}