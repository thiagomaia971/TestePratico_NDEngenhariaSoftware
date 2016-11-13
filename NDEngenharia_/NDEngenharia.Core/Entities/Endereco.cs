using NDEngenharia.Core.Exceptions;
using NDEngenharia.Core.Interfaces;
using NDEngenharia.Core.ValueObjects;
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

        // Ignore to the BD
        public ICollection<RuleViolation> RuleViolations { get; set; }

        public Endereco()
        {
            this.Logradouro = "";
            this.Numero = "";
            this.CEP = "";
            this.Referencia = "";

            this.RuleViolations = new List<RuleViolation>();
        }

        public Endereco(string Logradouro, string Numero, string CEP, string Referencia) : this()
        {
            
            if (!string.IsNullOrEmpty(Logradouro))
                this.Logradouro = Logradouro;

            if (!string.IsNullOrEmpty(Numero))
                this.Numero = Numero;

            if (!string.IsNullOrEmpty(CEP))
            {
                if (CEP != "__.___-___")
                    this.CEP = CEP;
            }

            if (!string.IsNullOrEmpty(Referencia))
                this.Referencia = Referencia;
        }

        public void ValidarEntity()
        {
            
            // Verificando Logradouro
            if (this.Logradouro.Length > 250)
                this.RuleViolations.Add(new RuleViolation("Logradouro", "Logradouro do cliente deve conter até 250 caracteres"));

            // Verificando Número
            if (this.Numero.Length > 20)
                this.RuleViolations.Add(new RuleViolation("Nome", "Número do logradouro deve conter entre 0 e 100 caracteres"));

            // Verificando CEP
            if (this.CEP.Length != 0 && this.CEP.Length != 10 || (this.CEP.Contains("_")))
                this.RuleViolations.Add(new RuleViolation("CEP", "CEP  deve conter 10 caracteres"));

            // Verificando Referencia60
            if (this.Referencia.Length > 250)
                this.RuleViolations.Add(new RuleViolation("Referencia", "Referência do logradouro deve conter até 250 caracteres"));

            if (this.RuleViolations.Count() > 0)
                throw new RuleViolationException(this.RuleViolations);

        }
    }
}
