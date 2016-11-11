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
            this.Logradouro = "";
            this.Numero = "";
            this.CEP = "";
            this.Referencia = "";
        }

        public Endereco(string Logradouro, string Numero, string CEP, string Referencia) : this()
        {
            
            if (!string.IsNullOrEmpty(Logradouro))
                this.Logradouro = Logradouro;

            if (!string.IsNullOrEmpty(Numero))
                this.Numero = Numero;

            if (!string.IsNullOrEmpty(CEP))
                this.CEP = CEP;

            if (!string.IsNullOrEmpty(Referencia))
                this.Referencia = Referencia;
        }

        public void ValidarEntity()
        {
            
            // Verificando Logradouro
            if (this.Logradouro.Length > 250)
                throw new RuleViolationException("Logradouro do cliente deve conter até 250 caracteres", "Logradouro");

            // Verificando Número
            if (this.Numero.Length > 20)
                throw new RuleViolationException("Número do logradouro deve conter entre 0 e 100 caracteres", "Nome");

            // Verificando CEP
            if (this.CEP.Length != 0 && this.CEP.Length != 10)
                throw new RuleViolationException("CEP  deve conter entre 14 caracteres", "CEP");

            // Verificando Referencia60
            if (this.Referencia.Length > 250)
                throw new RuleViolationException("Referência do logradouro deve conter até 250 caracteres", "Referencia");
        }
    }
}
