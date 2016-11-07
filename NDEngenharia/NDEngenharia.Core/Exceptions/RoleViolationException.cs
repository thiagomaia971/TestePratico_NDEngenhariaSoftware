using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.Exceptions
{
    public class RoleViolationException : Exception
    {

        public string PropertyNameExcepted { get; set; }

        public RoleViolationException(string message, string propertyNameExcepted) : base(message)
        {
            this.PropertyNameExcepted = propertyNameExcepted;
        }
    }
}
