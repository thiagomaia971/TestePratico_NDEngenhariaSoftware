﻿import { UnitOfWork } from "../../Repositories/UnitOfWork";
import { Cliente } from "../../Entities/Cliente";
import { Loading } from "../../Utils/Loading";
import { RuleViolationBuilder } from "../../Utils/RuleViolationBuilder";

export class ClienteController {

    private unitOfWork: UnitOfWork;
    public nameSearch: string = "";
    public todosClientes: Array<Cliente>;

    constructor() {
        this.unitOfWork = new UnitOfWork();
        this.carregarClientes();
    }

    public carregarClientes(): void {

        $("#clientesBody").html(`<tr><td colspan='7'> <div class='center fill-horizontal padding'> ${Loading.getLoading()}</div></td></tr>`);

        setTimeout(() => {
            this.unitOfWork.Clientes.getAllByName(this.nameSearch)
                .done((clientes) => {
                    this.todosClientes = clientes;
                    this.montarBodyTable();
                })
                .fail((error) => {
                    if (error.status === 404) {
                        $("#clientesBody").html("<tr><td class='text-center' colspan='7'><b>Nenhum cliente cadastrado</b></td></tr>");

                    }
                });

        }, 1000);
    }

    public adicionarCliente(cliente: Cliente): void {

        this.unitOfWork.Clientes.add(cliente)
            .done((response) => {
                window.location.href = '/Cliente/Index';
            })
            .fail((error) => {
                let errorMessage: string = RuleViolationBuilder.build(error.responseJSON);

                $("#mensagem").html(errorMessage);
            });

    }

    public deletarCliente(clienteId: number) {

        this.unitOfWork.Clientes.delete(clienteId)
            .done((cliente) => {
                (<any>$("#modalDeletar")).modal("hide");
                this.carregarClientes();
            })
            .fail((response) => {

            });
    }

    public montarModalDeletar(clienteSelecionado: Cliente): void {
        $("#mensagemDeletar").html(`Você deseja realmente excluir o cliente <b>${clienteSelecionado.Nome}</b>?`);
        $("#removerCliente").data("clienteid", clienteSelecionado.Id);

        (<any>$("#modalDeletar")).modal("show");
    }

    private montarBodyTable(): void {
        let data: string;

        for (let cliente of this.todosClientes) {

            let row: string = "";

            row += `<tr>`;
            row += `<td>${cliente.Nome}</td>`;
            row += `<td>${cliente.Telefone}</td>`;
            row += `<td>${cliente.Endereco.Logradouro}</td>`;
            row += `<td>${cliente.Endereco.Numero}</td>`;
            row += `<td>${cliente.Endereco.CEP}</td>`;
            row += `<td>${cliente.Endereco.Referencia}</td>`;
            row += `<td>${this.getButtonEditar(cliente.Id)} ${this.getButtonExcluir(cliente.Id)}`;
            row += `</tr>`;

            data += row;

        }

        $("#clientesBody").html(data);

    }

    private getButtonEditar(clienteId: number): string {

        let buttonEditar: string = `<button class='btn btn-info editarCliente' title='Editar' onclick="window.location.href='/Cliente/Editar?clienteId=${clienteId}'" data-clienteid='${clienteId}'>`;
        buttonEditar += `<span class='glyphicon glyphicon-pencil'></span>`;
        buttonEditar += `</button>`;

        return buttonEditar;
    }

    private getButtonExcluir(clienteId: number): string {

        let buttonEditar: string = `<button class='btn btn-danger confirmarRemover' title='Excluir' data-clienteid='${clienteId}'>`;
        buttonEditar += `<span class='glyphicon glyphicon-remove'></span>`;
        buttonEditar += `</button>`;

        return buttonEditar;
    }

}
