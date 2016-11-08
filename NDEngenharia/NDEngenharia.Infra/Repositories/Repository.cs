using NDEngenharia.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Infra.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected readonly DbContext Context;
        private DbSet<T> dbSet;

        public Repository(DbContext Context)
        {
            this.Context = Context;
            dbSet = this.Context.Set<T>();
        }

        public void Add(T Entity)
        {
            dbSet.Add(Entity);
        }

        public void Delete(int id)
        {
            T Entity = this.GetSingle(id);
            this.Delete(Entity);
        }

        public void Delete(T Entity)
        {
            dbSet.Remove(Entity);
        }

        public IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }

        public IEnumerable<T> GetAll(Func<T, bool> predicate)
        {
            return dbSet.Where(predicate).ToList();
        }

        public T GetSingle(int id)
        {
            return dbSet.Find(id);
        }

    }
}
