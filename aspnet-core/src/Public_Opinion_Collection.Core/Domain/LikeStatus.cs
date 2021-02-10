using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.Domain
{
   public class LikeStatus : AuditedEntity<Guid>
    {

        public string PetitionId { get; set; }
        public Boolean Like { get; set; }
        public Boolean DisLike { get; set; }
        public string UserId { get; set; }

    }
}
