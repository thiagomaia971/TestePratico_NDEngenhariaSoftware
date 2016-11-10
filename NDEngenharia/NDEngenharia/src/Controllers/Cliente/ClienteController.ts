﻿import { UnitOfWork } from "../../Repositories/UnitOfWork";
import { Cliente } from "../../Entities/Cliente";

export class ClienteController {

    private unitOfWork: UnitOfWork;
    public nameSearch: string = "";

    constructor() {
        this.unitOfWork = new UnitOfWork();
        this.carregarClientes();
    }

    public carregarClientes(): void {
        this.unitOfWork.Clientes.getAllByName(this.nameSearch)
            .done((clientes) => {
                this.inserirBodyTable(clientes);
            })
            .fail((error) => {
                if (error.status == 404) {
                    $("#clientesBody").html("Nenhum cliente cadastrado");

                }
            });
    }


    private inserirBodyTable(clientes: Array<Cliente>): void {
        let data: string;
        for (let cliente of clientes) {
            let row: string = "";

            row += `<tr>`;
            row += `<td>${cliente.nome}</td>`;
            row += `<td>${cliente.telefone}</td>`;
            row += `<td>${cliente.endereco.logradouro}</td>`;
            row += `<td>${cliente.endereco.numero}</td>`;
            row += `<td>${cliente.endereco.cep}</td>`;
            row += `<td>${cliente.endereco.referencia}</td>`;
            row += `<td>${this.getButtonEditar(cliente.id)} ${this.getButtonExcluir(cliente.id)}`;
            row += `</tr>`;

            data += row;

            $("#clientesBody").html(data);
        }

    }

    private getButtonEditar(clienteId: number): string {

        let buttonEditar: string = `<button class='btn btn-info editarCliente' title='Editar' data-clienteid='${clienteId}'>`;
        buttonEditar += `<span class='glyphicon glyphicon-pencil'></span>`;
        buttonEditar += `</button>`;

        return buttonEditar;
    }

    private getButtonExcluir(clienteId: number): string {

        let buttonEditar: string = `<button class='btn btn-danger removerCliente' title='Excluir' data-clienteid='${clienteId}'>`;
        buttonEditar += `<span class='glyphicon glyphicon-remove'></span>`;
        buttonEditar += `</button>`;

        return buttonEditar;
    }

}
