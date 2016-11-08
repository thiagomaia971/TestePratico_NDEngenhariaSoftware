﻿using NDEngenharia.Core.Exceptions;
using NDEngenharia.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.Entities
{
    public class Cliente : IEntity
    {

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public Endereco Endereco { get; set; }

        private Cliente()
        {

        }

        public Cliente(string Nome, string Telefone, string Logradouro, string Numero, string CEP, string Referencia)
        {
            this.Nome = Nome;
            this.Telefone = Telefone;
            this.Endereco = new Endereco(Logradouro, Numero, CEP, Referencia);

            this.ValidarEntity();
        }

        public void ValidarEntity()
        {

            // Verificando Nome
            if (string.IsNullOrEmpty(this.Nome))
                throw new RoleViolationException("Nome do cliente é obrigatório", "Nome");
            if (this.Nome.Length > 0 && this.Nome.Length < 101)
                throw new RoleViolationException("Nome do cliente deve conter entre 0 e 100 caracteres", "Nome");

            // Verificando Telefone
            if (!string.IsNullOrEmpty(Telefone) && Telefone.Length < 13 && Telefone.Length > 14 )
                throw new RoleViolationException("Telefone do cliente deve conter 15 caracteres", "Telefone");

            this.Endereco.ValidarEntity();

        }
    }
}
