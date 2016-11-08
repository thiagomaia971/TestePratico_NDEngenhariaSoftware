//import { UnitOfWork } from "../../Repositories/UnitOfWork";
var ClienteController = (function () {
    //private unitOfWork: UnitOfWork;
    function ClienteController() {
        console.log("carregou o CLienteController");
        // this.unitOfWork = new UnitOfWork();
    }
    ClienteController.prototype.click = function () {
        console.log("tes");
        alert("asdas");
    };
    return ClienteController;
}());
//# sourceMappingURL=ClienteController.js.map