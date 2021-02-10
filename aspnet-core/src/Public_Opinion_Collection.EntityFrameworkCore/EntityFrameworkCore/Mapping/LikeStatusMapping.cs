using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Public_Opinion_Collection.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.EntityFrameworkCore.Mapping
{
    class LikeStatusMapping : IEntityTypeConfiguration<LikeStatus>
    {

        public void Configure(EntityTypeBuilder<LikeStatus> builder)
        {

            builder.Property(x => x.PetitionId)
                 .IsRequired();

            builder.Property(x => x.Like)
                 .IsRequired();


            builder.Property(x => x.DisLike)
                .IsRequired();


            builder.Property(x => x.UserId)
                .IsRequired();

        }
    }
}
