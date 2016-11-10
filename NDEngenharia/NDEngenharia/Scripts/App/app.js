define(["require", "exports", "./Controllers/Cliente/ClienteController"], function (require, exports, ClienteController_1) {
    "use strict";
    $(document).ready(function () {
        var clienteController = new ClienteController_1.ClienteController();
        $("#NomeSearch").on("keyup", function () {
            clienteController.nameSearch = $(this).val();
            clienteController.carregarClientes();
        });
    });
});
//# sourceMappingURL=app.js.map