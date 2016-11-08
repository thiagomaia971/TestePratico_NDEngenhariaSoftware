import { UnitOfWork } from "../../Repositories/UnitOfWork";

export class ClienteController {
    private unitOfWork: UnitOfWork;

    constructor() {
        this.unitOfWork = new UnitOfWork();
        console.log("carregou o CLienteController");
    }



}