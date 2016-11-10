define(["require", "exports", "./Controllers/Cliente/ClienteController"], function (require, exports, ClienteController_1) {
    "use strict";
    $(document).ready(function () {
        var clienteController = new ClienteController_1.ClienteController();
        $("#Nome").on("keyup", function () {
            clienteController.carregarClientes();
        });
        /*$("#test").on("click", function () {
            clienteController.click();
        });*/
    });
});
//# sourceMappingURL=app.js.map