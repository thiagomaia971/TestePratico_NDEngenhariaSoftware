define(["require", "exports"], function (require, exports) {
    "use strict";
    var ClienteRepository = (function () {
        function ClienteRepository(url) {
            this.url = url;
        }
        ClienteRepository.prototype.getAll = function () {
            var _url = this.url + "/Cliente/Todos";
            return $.getJSON(_url);
        };
        ClienteRepository.prototype.getAllByName = function (nome) {
            var _url = this.url + "/Cliente/Todos/" + nome;
            return $.getJSON(_url);
        };
        ClienteRepository.prototype.getSingle = function (id) {
            var _url = this.url + "/Cliente/Filtrar";
            return $.ajax({
                method: "POST",
                url: _url,
                data: { id: id }
            });
        };
        ClienteRepository.prototype.add = function (clienteVM) {
            var _url = this.url + "/Cliente/Criar";
            console.log(JSON.stringify(clienteVM));
            return $.ajax({
                method: "POST",
                url: _url,
                contentType: "application/json",
                data: JSON.stringify(clienteVM)
            });
        };
        ClienteRepository.prototype.delete = function (clienteId) {
            var _url = this.url + "/Cliente/Deletar/" + clienteId;
            return $.ajax({
                method: "GET",
                url: _url
            });
        };
        return ClienteRepository;
    }());
    exports.ClienteRepository = ClienteRepository;
});
//# sourceMappingURL=ClienteRepository.js.map