using NDEngenharia.Core.Entities;
using NDEngenharia.Infra.EntityTypeConfigurations;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Infra
{
    public class Context : DbContext
    {

        public DbSet<Cliente> Clientes { get; set; }

        public Context() : base("name=DefaultConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ClienteEntityTypeConfiguration());
        }

    }
}
