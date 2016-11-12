import { ClienteRepository } from "./ClienteRepository";

export class UnitOfWork {

    private _url: string = "/api";

    public Clientes: ClienteRepository;

    constructor() {
        this.Clientes = new ClienteRepository(this._url);
    }
}