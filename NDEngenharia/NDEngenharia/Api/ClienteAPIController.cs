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
    public class ClienteAPIController : ApiController
    {

        private IUnitOfWork UnitOfWork { get; set; }

        public ClienteAPIController(IUnitOfWork UnitOfWork)
        {
            this.UnitOfWork = UnitOfWork;
        }

        [Route("/Cliente/Todos")]
        [HttpGet]
        public IHttpActionResult TodosClientes()
        {
            IEnumerable<Cliente> clientesCadastrados = this.UnitOfWork.Clientes.GetAll();

            return Ok(clientesCadastrados);
        }

        [Route("/Cliente/Criar")]
        [HttpPost]
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
                return Content(HttpStatusCode.BadRequest, new {
                    message = e.Message,
                    propertyExcepted = e.PropertyNameExcepted
                });
            }
            
        }

    }
}
