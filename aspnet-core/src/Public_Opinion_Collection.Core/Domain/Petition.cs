using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Domain
{
    public class Petition : AuditedEntity<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public int Likes { get; set; }
        public int DisLikes { get; set; }
        public string Auther { get; set; }

    }
}
