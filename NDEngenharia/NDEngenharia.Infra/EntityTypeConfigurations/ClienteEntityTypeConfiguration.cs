using NDEngenharia.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Infra.EntityTypeConfigurations
{
    public class ClienteEntityTypeConfiguration : EntityTypeConfiguration<Cliente>
    {
        public ClienteEntityTypeConfiguration()
        {
            ToTable("Clientes");

            HasKey(x => x.Id)
                .Property(x => x.Id)
                .IsRequired()
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

            Property(x => x.Nome)
                .IsRequired()
                .HasColumnName("Nome")
                .HasMaxLength(100);

            Property(x => x.Telefone)
                .IsOptional()
                .HasColumnName("Telefone")
                .HasMaxLength(15);

            Property(x => x.Endereco.Logradouro)
                .IsOptional()
                .HasColumnName("Logradouro")
                .HasMaxLength(250);

            Property(x => x.Endereco.Numero)
                .IsOptional()
                .HasColumnName("Numero")
                .HasMaxLength(20);

            Property(x => x.Endereco.CEP)
                .IsOptional()
                .HasColumnName("Cep")
                .HasMaxLength(14);

            Property(x => x.Endereco.Referencia)
                .IsOptional()
                .HasColumnName("Referencia")
                .HasMaxLength(250);

        }
    }
}
