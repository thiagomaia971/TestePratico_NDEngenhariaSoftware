using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.Entities
{
    public class Endereco
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

    }
}
