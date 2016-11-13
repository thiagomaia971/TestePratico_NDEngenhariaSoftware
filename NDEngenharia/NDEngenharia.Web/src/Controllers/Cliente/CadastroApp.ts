import { ClienteController } from "./ClienteController";
import { Cliente } from "../../Entities/Cliente";
import { Endereco } from "../../Entities/Endereco";

var clienteToAdd: Cliente;

$(document).ready(function () {

    var clienteController: ClienteController = new ClienteController();
    clienteToAdd = new Cliente();
    clienteToAdd.Endereco = new Endereco();

    montarCliente();

    $(document).on("click", "#cadastrar", function () {
        
        clienteController.adicionarCliente(clienteToAdd);
    });

});

function montarCliente(): void {

    clienteToAdd.Id = $("#Id").val() == "" ? 0 : $("#Id").val();

    clienteToAdd.Nome = $("#Nome").val();
    $(document).on("keyup", "#Nome", function () {
        clienteToAdd.Nome = $(this).val();
    });

    clienteToAdd.Telefone = $("#Telefone").val();
    $(document).on("keyup", "#Telefone", function () {
        clienteToAdd.Telefone = $(this).val();
    });

    clienteToAdd.Endereco.Logradouro = $("#Endereco_Logradouro").val();
    $(document).on("keyup", "#Endereco_Logradouro", function () {
        clienteToAdd.Endereco.Logradouro = $(this).val();
    });

    clienteToAdd.Endereco.Numero = $("#Endereco_Numero").val();
    $(document).on("keyup", "#Endereco_Numero", function () {
        clienteToAdd.Endereco.Numero = $(this).val();
    });

    clienteToAdd.Endereco.CEP = $("#Endereco_CEP").val();
    $(document).on("keyup", "#Endereco_CEP", function () {
        clienteToAdd.Endereco.CEP = $(this).val();
    });

    clienteToAdd.Endereco.Referencia = $("#Endereco_Referencia").val();
    $(document).on("keyup", "#Endereco_Referencia", function () {
        clienteToAdd.Endereco.Referencia = $(this).val();
    });

}
