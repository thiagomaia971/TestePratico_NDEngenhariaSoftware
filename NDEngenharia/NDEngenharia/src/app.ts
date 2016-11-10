import { ClienteController } from "./Controllers/Cliente/ClienteController";

$(document).ready(function () {
    var clienteController: ClienteController = new ClienteController();

    $("#Nome").on("keyup", function () {
        clienteController.carregarClientes();
    });
    /*$("#test").on("click", function () {
        clienteController.click();
    });*/

});