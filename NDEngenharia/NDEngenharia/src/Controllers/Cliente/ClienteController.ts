import { UnitOfWork } from "../../Repositories/UnitOfWork";
import { Cliente } from "../../Entities/Cliente";

export class ClienteController {
    private unitOfWork: UnitOfWork;

    constructor() {
        this.unitOfWork = new UnitOfWork();
        this.carregarClientes();
    }
    
    public carregarClientes(): void {
        this.unitOfWork.Clientes.getAll()
            .done((clientes) => {
                this.inserirBodyTable(clientes);
            });
    }

    private inserirBodyTable(clientes: Array<Cliente>): void {
        if (clientes.length == 0) {
            $("#clientesBody").html("Nenhum cliente cadastrado");
        } else {
            clientes.forEach((cliente) => {
                let row: string = "";
                row += `<tr>`

                row += `<td>${cliente.nome}</td>`

                row += `</tr>`
            })
        }

    }

}

