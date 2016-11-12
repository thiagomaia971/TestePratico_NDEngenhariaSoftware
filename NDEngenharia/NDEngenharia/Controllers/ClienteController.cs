using AutoMapper;
using NDEngenharia.Core.Entities;
using NDEngenharia.Core.Exceptions;
using NDEngenharia.Core.Repositories;
using NDEngenharia.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NDEngenharia.Controllers
{
    public class ClienteController : Controller
    {
        
        private IUnitOfWork UnitOfWork;

        public ClienteController(IUnitOfWork UnitOfWork)
        {
            this.UnitOfWork = UnitOfWork;
        }

        [HttpGet]
        public ActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public ActionResult Novo()
        {

            var clienteVM = new ClienteViewModel();

            return View();
        }
        
        [HttpGet]
        public ActionResult Editar(int clienteId)
        {
            var clienteVM = Mapper.Map<Cliente, ClienteViewModel>(this.UnitOfWork.Clientes.GetSingle(clienteId));

            return View("Novo", clienteVM);

        }
    }
}