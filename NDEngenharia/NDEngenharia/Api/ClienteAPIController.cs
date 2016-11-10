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

                this.UnitOfWork.Clientes.Add(clienteVM);
                this.UnitOfWork.SaveChanges();

                return Ok(clienteVM);
            }
            catch (RoleViolationException e)
            {
                return Content(HttpStatusCode.BadRequest, new
                {
                    message = e.Message,
                    propertyExcepted = e.PropertyNameExcepted
                });
            }

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


    }
}
