using gorila.API.Persistence.EntityConfigurations;
using gorila.API.Model;
using Microsoft.EntityFrameworkCore;

namespace gorila.API.Persistence {
    public class ApplicationDbContext : DbContext {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            builder.ApplyConfiguration(new ProductEntityConfiguration());
        }
    }
}