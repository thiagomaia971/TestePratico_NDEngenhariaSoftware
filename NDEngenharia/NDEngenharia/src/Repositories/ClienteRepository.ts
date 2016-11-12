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

    public getAllByName(nome: string): JQueryPromise<Array<Cliente>> {
        let _url: string = `${this.url}/Cliente/Todos/${nome}`;
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

    public add(clienteVM: Cliente): JQueryPromise<Cliente> {
        let _url: string = `${this.url}/Cliente/Criar`;

        console.log(JSON.stringify(clienteVM));

        return $.ajax({
            method: "POST",
            url: _url,
            contentType: "application/json",
            data: JSON.stringify(clienteVM)
        })
    }

    public delete(clienteId: number): JQueryPromise<Cliente> {
        let _url: string = `${this.url}/Cliente/Deletar/${clienteId}`;

        return $.ajax({
            method: "GET",
            url: _url
        });
    }

}