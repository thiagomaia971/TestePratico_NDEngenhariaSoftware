/// <reference path="../../Scripts/jquery.d.ts" />
import { Cliente } from "../Entities/Cliente";

export class ClienteRepository {

    private url: string;

    constructor(url: string) {
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