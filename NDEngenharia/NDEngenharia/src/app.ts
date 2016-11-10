import { ClienteController } from "./Controllers/Cliente/ClienteController";

$(document).ready(function () {
    var clienteController: ClienteController = new ClienteController();

    $("#NomeSearch").on("keyup", function () {
        clienteController.nameSearch = $(this).val();
        clienteController.carregarClientes();
    });
    
});