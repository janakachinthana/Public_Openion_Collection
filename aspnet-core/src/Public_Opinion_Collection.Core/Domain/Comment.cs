using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Domain
{
   public class Comment : AuditedEntity<Guid>
    {
        public string Message { get; set; }
        public string PetitionId { get; set; }
        public string Auther { get; set; }
    }
}

