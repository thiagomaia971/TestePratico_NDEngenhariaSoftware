"use strict";
var ClienteRepository /*extends IRepository<Cliente>*/ = (function () {
    function ClienteRepository /*extends IRepository<Cliente>*/(url) {
        //super();
        this.url = url;
    }
    ClienteRepository /*extends IRepository<Cliente>*/.prototype.getAll = function () {
        this.url = this.url + "/Cliente/Todos";
        return $.getJSON(this.url);
    };
    return ClienteRepository /*extends IRepository<Cliente>*/;
}());
exports.ClienteRepository /*extends IRepository<Cliente>*/ = ClienteRepository /*extends IRepository<Cliente>*/;
//# sourceMappingURL=ClienteRepository.js.map