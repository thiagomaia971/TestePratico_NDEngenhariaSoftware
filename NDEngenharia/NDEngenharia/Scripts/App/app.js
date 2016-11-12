define(["require", "exports", "./Controllers/Cliente/ClienteController"], function (require, exports, ClienteController_1) {
    "use strict";
    $(document).ready(function () {
        var clienteController = new ClienteController_1.ClienteController();
        $("#NomeSearch").on("keyup", function () {
            clienteController.nameSearch = $(this).val();
            clienteController.carregarClientes();
        });
        $(document).on("click", "#removerCliente", function () {
            var clienteId = $(this).data("clienteid");
            clienteController.deletarCliente(clienteId);
        });
        $(document).on("click", ".confirmarRemover", function () {
            var clienteId = $(this).data("clienteid");
            var clienteSelecionado = clienteController.todosClientes.filter(function (cliente) { return cliente.Id === clienteId; }).pop();
            clienteController.montarModalDeletar(clienteSelecionado);
        });
    });
});
//# sourceMappingURL=app.js.map