using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NDEngenharia.Models
{
    public class ClienteViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Nome do cliente é obrigatório")]
        [MaxLength(100, ErrorMessage = "Nome do cliente deve conter até {0}")]
        public string Nome { get; set; }

        [StringLength(15, ErrorMessage = "Telefone do cliente deve conter {0} caracteres")]
        public string Telefone { get; set; }

        public EnderecoViewModel Endereco { get; set; }
    }
}