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

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Registrar(ClienteViewModel clienteVM)
        {
            this.removerErrorId(ModelState);
            

            if (!ModelState.IsValid)
                return View("Novo", clienteVM);

            var cliente = Mapper.Map<ClienteViewModel, Cliente>(clienteVM);

            try
            {
                cliente.ValidarEntity();
            }
            catch (RuleViolationException e)
            {
                this.addModelStateError(ModelState, e);
                ModelState.AddModelError("Violação de regra", e);
                return View("Novo", clienteVM);
            }

            if (cliente.Id > 0)
            {
                var clienteDb = this.UnitOfWork.Clientes.GetSingle(cliente.Id);
                Mapper.Map(cliente, clienteDb);
            }else
            {
                this.UnitOfWork.Clientes.Add(cliente);
            }

            this.UnitOfWork.SaveChanges();

            return RedirectToAction("Index");
        }

        private void addModelStateError(ModelStateDictionary modelState, RuleViolationException e)
        {
            modelState.AddModelError(e.PropertyNameExcepted, e.Message);
        }

        private void removerErrorId(ModelStateDictionary modelState)
        {
            ModelError errorId = null;
            foreach (var model in ModelState.Values)
            {
                foreach (var error in model.Errors)
                {
                    if (error.ErrorMessage.ToLower().Contains("o campo id"))
                        errorId = error;
                }
                if (errorId != null)
                {
                    model.Errors.Remove(errorId);
                    return;
                }
            }

        }
    }
}