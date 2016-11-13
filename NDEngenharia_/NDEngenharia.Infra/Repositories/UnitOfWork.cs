using NDEngenharia.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Infra.Repositories
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        protected Context Context { get; set; }

        public UnitOfWork(Context Context)
        {
            this.Context = Context;
        }

        public IClienteRepository Clientes { get { return new ClienteRepository(this.Context); } }

        public void SaveChanges()
        {
            this.Context.SaveChanges();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void Dispose(bool disposing)
        {
            if (disposing)
            {
                this.Context.Dispose();
            }
        }
    }
}
