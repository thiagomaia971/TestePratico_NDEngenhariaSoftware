﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NDEngenharia;
using NDEngenharia.Core.Entities;
using NDEngenharia.Core.Exceptions;

namespace NDEngenharia.Tests.Core
{
    [TestClass]
    public class ClienteTeste
    {
        [TestMethod]
        [ExpectedException(typeof(RuleViolationException))]
        public void CriarUmClienteSemNome_DeveRetornarUmaRoleViolationException()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente(null, "(85) 99728-6590", "Rua Três", "131", "60.41-480", "Perto do habbibs");

            // Assert
            cliente.ValidarEntity();

        }

        [TestMethod]
        [ExpectedException(typeof(RuleViolationException))]
        public void CriarUmClienteComNumeroDeCaracteresDoTelefoneErrado_DeveRetornarUmaRoleViolationException()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Thiago", "(85) 99728-6", "Rua Três", "131", "60.841-480", "Perto do habbibs");

            // Assert
            cliente.ValidarEntity();

        }

        [TestMethod]
        [ExpectedException(typeof(RuleViolationException))]
        public void CriarUmClienteComNumeroDeCaracteresDoCEPErrado_DeveRetornarUmaRoleViolationException()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Thiago", "(85) 99728-6590", "Rua Três", "131", "60.841-48", "Perto do habbibs");

            // Assert
            cliente.ValidarEntity();
        }

        [TestMethod]
        public void CriarUmClienteSemCEP_DeveCriar()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Cliente", "(85) 99728-6590", "Rua Três", "131", null, "Perto do habbibs");

            // Assert
            cliente.ValidarEntity();

        }

        [TestMethod]
        public void CriarUmClienteSemTelefone_DeveCriar()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Cliente", null, "Rua Três", "131", "60.841-480", "Perto do habbibs");

            // Assert
            cliente.ValidarEntity();

        }


        [TestMethod]
        public void CriarUmClienteSemReferencia_DeveCriar()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Cliente", "(85) 99728-6590", "Rua Três", "131", "60.841-480", null);

            // Assert
            cliente.ValidarEntity();

        }

        [TestMethod]
        public void CriarUmClienteApenasComONome_DeveCriar()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Cliente", null, null, null, null, null);

            // Assert
            cliente.ValidarEntity();

        }

        [TestMethod]
        public void CriarUmClienteComCEPDefault_DeveCriarMasSemOCEP()
        {
            // Arrange
            Cliente cliente;

            // Act
            cliente = new Cliente("Cliente", null, null, null, "__.___-___", null);

            // Assert
            cliente.ValidarEntity();

        }

    }
}
