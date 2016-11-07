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
        }

        public void ValidarEntity()
        {

            if (string.IsNullOrEmpty(this.Nome))
                throw new RoleViolationException("Erro de validação do Cliente", "Nome");
            if (this.Nome.Length > 0 && this.Nome.Length < 101)
                throw new RoleViolationException("Nome do cliente deve conter entre 0 e 100 caracteres", "Nome");
            
        }
    }
}