"use strict";
var ClienteRepository /*extends IRepository<Cliente>*/ = (function () {
    function ClienteRepository /*extends IRepository<Cliente>*/(url) {
        //super();
        this.url = url;
    }
    ClienteRepository /*extends IRepository<Cliente>*/.prototype.getAll = function () {
        var _url = this.url + "/Cliente/Todos";
        return $.getJSON(_url);
    };
    ClienteRepository /*extends IRepository<Cliente>*/.prototype.getSingle = function (id) {
        var _url = this.url + "/Cliente/Filtrar";
        return $.ajax({
            method: "POST",
            url: _url,
            data: { id: id }
        });
    };
    ClienteRepository /*extends IRepository<Cliente>*/.prototype.add = function (cliente) {
        var _url = this.url + "/Cliente/Criar";
        return $.ajax({
            method: "POST",
            url: _url,
            data: { cliente: cliente }
        });
    };
    return ClienteRepository /*extends IRepository<Cliente>*/;
}());
exports.ClienteRepository /*extends IRepository<Cliente>*/ = ClienteRepository /*extends IRepository<Cliente>*/;
//# sourceMappingURL=ClienteRepository.js.map