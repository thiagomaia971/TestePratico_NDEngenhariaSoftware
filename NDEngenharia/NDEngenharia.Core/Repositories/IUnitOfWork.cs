using NDEngenharia.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.Repositories
{
    public interface IUnitOfWork
    {

        IClienteRepository Clientes { get; }

        void SaveChanges();

    }
}
