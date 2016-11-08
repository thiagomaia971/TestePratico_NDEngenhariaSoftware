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
        ClienteRepository.prototype.getSingle = function (id) {
            var _url = this.url + "/Cliente/Filtrar";
            return $.ajax({
                method: "POST",
                url: _url,
                data: { id: id }
            });
        };
        ClienteRepository.prototype.add = function (cliente) {
            var _url = this.url + "/Cliente/Criar";
            return $.ajax({
                method: "POST",
                url: _url,
                data: { cliente: cliente }
            });
        };
        return ClienteRepository;
    }());
    exports.ClienteRepository = ClienteRepository;
});
//# sourceMappingURL=ClienteRepository.js.map