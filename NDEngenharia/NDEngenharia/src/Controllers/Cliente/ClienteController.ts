﻿import { UnitOfWork } from "../../Repositories/UnitOfWork";
import { Cliente } from "../../Entities/Cliente";

class ClienteController {

    private unitOfWork: UnitOfWork;

    constructor() {
        this.unitOfWork = new UnitOfWork();
        this.carregarClientes();
        console.log("carregou o CLienteController");
       // this.unitOfWork = new UnitOfWork();
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

                row += `<td>${cliente.nome}</td>`;
                
                row += `</tr>`
            })
        }

    }

}

