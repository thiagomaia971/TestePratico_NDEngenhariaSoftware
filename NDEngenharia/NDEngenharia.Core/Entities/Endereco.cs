using NDEngenharia.Core.Exceptions;
using NDEngenharia.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.Entities
{
    public class Endereco : IEntity
    {
        public string Logradouro { get; set; }
        public string Numero { get; set; }
        public string CEP { get; set; }
        public string Referencia { get; set; }

        public Endereco()
        {

        }

        public Endereco(string Logradouro, string Numero, string CEP, string Referencia)
        {
            this.Logradouro = Logradouro;
            this.Numero = Numero;
            this.CEP = CEP;
            this.Referencia = Referencia;
        }

        public void ValidarEntity()
        {
            
            // Verificando Logradouro
            if (!string.IsNullOrEmpty(this.Logradouro) && this.Logradouro.Length > 250)
                throw new RoleViolationException("Logradouro do cliente deve conter até 250 caracteres", "Logradouro");

            // Verificando Número
            if (!string.IsNullOrEmpty(this.Numero) && this.Numero.Length > 20)
                throw new RoleViolationException("Número do logradouro deve conter entre 0 e 100 caracteres", "Nome");

            // Verificando CEP
            if (!string.IsNullOrEmpty(this.CEP) && this.CEP.Length != 14)
                throw new RoleViolationException("CEP  deve conter entre 14 caracteres", "CEP");

            // Verificando Referencia
            if (!string.IsNullOrEmpty(this.Referencia) && this.Referencia.Length > 250)
                throw new RoleViolationException("Referência do logradouro deve conter até 250 caracteres", "Referencia");
        }
    }
}
