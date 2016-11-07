using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NDEngenharia;
using NDEngenharia.Controllers;
using NDEngenharia.Core.Entities;
using NDEngenharia.Core.Exceptions;

namespace NDEngenharia.Tests.Core
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        [ExpectedException(typeof(RoleViolationException))]
        public void CriarUmClienteSemNomeDeveRetornarUmaRoleViolationException()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente(null, "(85) 99728-6590", "Rua Três", "131", "60.841-480", "Perto do habbibs");

            // Assert
            
        }
        
    }
}
