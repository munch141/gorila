using gorila.API.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace gorila.API.Persistence.EntityConfigurations {
    public class ProductEntityConfiguration : IEntityTypeConfiguration<Product> {
        public void Configure(EntityTypeBuilder<Product> builder) {
            builder.ToTable(nameof(Product));

            builder.HasKey(product => product.Id);

            builder.Property(product => product.Name).IsRequired();
            builder.Property(product => product.Description).IsRequired();
            builder.Property(product => product.Price).IsRequired();
        }
    }
}
