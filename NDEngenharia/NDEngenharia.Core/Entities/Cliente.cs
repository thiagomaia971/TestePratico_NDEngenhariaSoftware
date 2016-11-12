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
    public class Cliente : IEntity
    {

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public Endereco Endereco { get; set; }

        public ICollection<RuleViolation> RuleViolations { get; set; }

        private Cliente()
        {
            this.Telefone = "";
            this.RuleViolations = new List<RuleViolation>();
        }

        public Cliente(string Nome, string Telefone, string Logradouro, string Numero, string CEP, string Referencia) : this()
        {
            this.Nome = Nome;

            if (!string.IsNullOrEmpty(Telefone))
            {
                if (Telefone != "(__) ____-____")
                    this.Telefone = Telefone;
            }

            this.Endereco = new Endereco(Logradouro, Numero, CEP, Referencia);
            
        }

        public void ValidarEntity()
        {

            // Verificando Nome
            if (string.IsNullOrEmpty(this.Nome))
                this.RuleViolations.Add(new RuleViolation("Nome", "Nome do cliente é obrigatório"));
            if (!string.IsNullOrEmpty(this.Nome) && !(this.Nome.Length > 0 && this.Nome.Length < 101))
                this.RuleViolations.Add(new RuleViolation("Nome", "Nome do cliente deve conter entre 0 e 100 caracteres"));

            // Verificando Telefone
            if ( Telefone.Length != 0 && (Telefone.Length < 13 || Telefone.Length > 15) || (this.Telefone.Contains("_")))
                this.RuleViolations.Add(new RuleViolation("Telefone", "Telefone do cliente deve conter 14 ou 15 caracteres"));

            try
            {
                this.Endereco.ValidarEntity();
            }
            catch (RuleViolationException e)
            {
                foreach (var ruleException in e.RuleViolations)
                {
                    this.RuleViolations.Add(ruleException);
                }
                throw new RuleViolationException(this.RuleViolations);
            }

            if (this.RuleViolations.Count() > 0)
                throw new RuleViolationException(this.RuleViolations);

        }
    }
}
