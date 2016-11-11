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



            return RedirectToAction("Index");
        }

    }
}