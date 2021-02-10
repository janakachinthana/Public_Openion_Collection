using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Public_Opinion_Collection.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Public_Opinion_Collection.EntityFrameworkCore.Mapping
{
    class PetitionMapping : IEntityTypeConfiguration<Petition>
    {
        public void Configure(EntityTypeBuilder<Petition> builder)
        {
            builder.Property(x => x.Title)
                 .IsRequired()
                 .HasMaxLength(250);

            builder.Property(x => x.Description)
                 .IsRequired();

            builder.Property(x => x.Category)
                .IsRequired()
                .HasMaxLength(250);

            builder.Property(x => x.Auther)
               .IsRequired()
               .HasMaxLength(250);
        }
    }
}
