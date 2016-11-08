using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NDEngenharia.Models
{
    public class EnderecoViewModel
    {
        [MaxLength(250, ErrorMessage = "Logradouro deve conter até {0} caracteres")]
        public string Logradouro { get; set; }

        [MaxLength(20, ErrorMessage = "Número do logradouro deve conter até {0} caracteres")]
        public string Numero { get; set; }

        [StringLength(14, ErrorMessage = "CEP deve conter {0} caracteres")]
        public string CEP { get; set; }

        [Display(Name = "Referência")]
        [StringLength(250, ErrorMessage = "Referencia deve conter até {0} caracteres")]
        public string Referencia { get; set; }
    }
}