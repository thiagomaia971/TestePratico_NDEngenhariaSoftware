import { ClienteController } from "./Controllers/Cliente/ClienteController";
import { Cliente } from "./Entities/Cliente";

$(document).ready(function () {
    var clienteController: ClienteController = new ClienteController();

    $("#NomeSearch").on("keyup", function () {
        clienteController.nameSearch = $(this).val();
        clienteController.carregarClientes();
    });

    $(document).on("click", "#removerCliente", function () {
        let clienteId: number = $(this).data("clienteid");
        clienteController.deletarCliente(clienteId);
    });

    $(document).on("click", ".confirmarRemover", function () {

        let clienteId: number = $(this).data("clienteid");
        let clienteSelecionado: Cliente = clienteController.todosClientes.filter(cliente => cliente.Id === clienteId).pop();

        clienteController.montarModalDeletar(clienteSelecionado);
    });
    
});
