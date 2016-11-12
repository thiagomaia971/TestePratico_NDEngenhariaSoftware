using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.ValueObjects
{
    public class RuleViolation
    {
        public string PropertyExcepted { get; set; }
        public string Message { get; set; }

        public RuleViolation(string PropertyExcepted, string Message)
        {
            this.PropertyExcepted = PropertyExcepted;
            this.Message = Message;
        }
    }
}
