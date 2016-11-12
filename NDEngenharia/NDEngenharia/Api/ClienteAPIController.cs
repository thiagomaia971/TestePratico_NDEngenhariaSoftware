using AutoMapper;
using NDEngenharia.Core.Entities;
using NDEngenharia.Core.Exceptions;
using NDEngenharia.Core.Repositories;
using NDEngenharia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NDEngenharia.Api
{
    [AllowAnonymous]
    public class ClienteAPIController : ApiController
    {

        private IUnitOfWork UnitOfWork { get; set; }

        public ClienteAPIController(IUnitOfWork UnitOfWork)
        {
            this.UnitOfWork = UnitOfWork;
        }

        [HttpGet]
        [Route("api/Cliente/Todos")]
        public IHttpActionResult TodosClientes()
        {
            IEnumerable<Cliente> clientesCadastrados = this.UnitOfWork.Clientes.GetAll();

            if (clientesCadastrados.Count() == 0)
                return NotFound();

            return Ok(clientesCadastrados);
        }

        [HttpGet]
        [Route("api/Cliente/Todos/{nome}")]
        public IHttpActionResult TodosClientes(string nome)
        {
            IEnumerable<Cliente> clientesCadastrados = this.UnitOfWork.Clientes.GetAll(x => x.Nome.ToLower().Contains(nome));

            if (clientesCadastrados.Count() == 0)
                return NotFound();

            return Ok(clientesCadastrados);

        }

        [HttpPost]
        [Route("api/Cliente/Criar")]
        public IHttpActionResult CriarCliente(Cliente clienteVM)
        {
            try
            {
                clienteVM.ValidarEntity();

                if (clienteVM.Id != 0)
                {

                    var cliente = this.UnitOfWork.Clientes.GetSingle(clienteVM.Id);
                    cliente.Nome = clienteVM.Nome;
                    cliente.Telefone = clienteVM.Telefone;
                    cliente.Endereco.CEP = clienteVM.Endereco.CEP;
                    cliente.Endereco.Logradouro = clienteVM.Endereco.Logradouro;
                    cliente.Endereco.Numero = clienteVM.Endereco.Numero;
                    cliente.Endereco.Referencia = clienteVM.Endereco.Referencia;

                }
                else
                {
                    this.UnitOfWork.Clientes.Add(clienteVM);
                }

                this.UnitOfWork.SaveChanges();

                return Ok(clienteVM);
            }
            catch (RuleViolationException e)
            {
                return Content(HttpStatusCode.BadRequest, e.RuleViolations);
            }

        }

        [HttpPost]
        [Route("api/Cliente/Editar")]
        public IHttpActionResult EditarCliente(Cliente cliente)
        {

            try
            {
                cliente.ValidarEntity();

            }
            catch (RuleViolationException e)
            {
                return Content(HttpStatusCode.BadRequest, e.RuleViolations);
            }

            var clienteDB = this.UnitOfWork.Clientes.GetSingle(cliente.Id);

            if (clienteDB == null)
                return NotFound();

            Mapper.Map(cliente, clienteDB);

            this.UnitOfWork.SaveChanges();

            return Ok(clienteDB);
        }

        [HttpPost]
        [Route("api/Cliente/Filtrar")]
        public IHttpActionResult Filtrar(int id)
        {
            Cliente cliente = this.UnitOfWork.Clientes.GetSingle(id);
            if (cliente != null)
                return Ok(cliente);

            return NotFound();
        }

        [HttpGet]
        [Route("api/Cliente/Deletar/{clienteId}")]
        public IHttpActionResult DeletarCliente(int clienteId)
        {
            var cliente = this.UnitOfWork.Clientes.GetSingle(clienteId);

            if (cliente == null)
                return NotFound();

            this.UnitOfWork.Clientes.Delete(cliente);
            this.UnitOfWork.SaveChanges();

            return Ok(cliente);

        }

    }
}
