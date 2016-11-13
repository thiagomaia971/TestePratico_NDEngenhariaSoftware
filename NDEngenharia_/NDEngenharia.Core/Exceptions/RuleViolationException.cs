using NDEngenharia.Core.ValueObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NDEngenharia.Core.Exceptions
{
    public class RuleViolationException : Exception
    {

        public ICollection<RuleViolation> RuleViolations { get; set; }

        public RuleViolationException(ICollection<RuleViolation> RuleViolations)
        {
            this.RuleViolations = RuleViolations;
        }
        
    }
}
