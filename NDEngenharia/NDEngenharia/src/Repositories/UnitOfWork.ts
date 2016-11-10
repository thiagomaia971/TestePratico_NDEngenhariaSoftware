import { ClienteRepository } from "./ClienteRepository";

export class UnitOfWork {

    private _url: string = "http://localhost:61662/api";

    public Clientes: ClienteRepository;

    constructor() {
        this.Clientes = new ClienteRepository(this._url);
    }
}