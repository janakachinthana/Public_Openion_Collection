using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Public_Opinion_Collection.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.EntityFrameworkCore.Mapping
{
    class CommentMappting : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {

            builder.Property(x => x.Message)
                 .IsRequired();

            builder.Property(x => x.PetitionId)
                 .IsRequired();


            builder.Property(x => x.Auther)
                .IsRequired();

        }
    }

}
