using gorila.API.Model;
using System.Linq;
using System.Threading.Tasks;

namespace gorila.API.Persistence {
    public static class ApplicationDbContextSeed {
        public static async Task SeedAsync(ApplicationDbContext context) {
            if (!context.Products.Any()) {
                await context.AddAsync(new Product() { Name = "Product 1" });
                await context.AddAsync(new Product() { Name = "Product 2" });
                await context.AddAsync(new Product() { Name = "Product 3" });

                await context.SaveChangesAsync();
            }
        }
    }
}
