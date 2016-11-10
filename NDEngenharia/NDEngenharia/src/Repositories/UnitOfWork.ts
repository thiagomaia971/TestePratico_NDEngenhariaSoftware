import ClienteRepository = require("./ClienteRepository");

export class UnitOfWork {

    private _url: string = "http://localhost:61662/api";

    public Clientes: ClienteRepository.ClienteRepository;

    constructor() {
        this.Clientes = new ClienteRepository.ClienteRepository(this._url);
    }
}