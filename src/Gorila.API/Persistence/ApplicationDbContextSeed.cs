using gorila.API.Model;

namespace gorila.API.Persistence {
    public static class ApplicationDbContextSeed {
        public static async Task SeedAsync(ApplicationDbContext context) {
            if (!context.Products.Any()) {
                var products = new List<Product>();

                for (int i = 1; i < 5; i++)
                {
                    products.Add(new Product {
                        Name = $"Product {i}",
                        Description = "A product description"
                    });
                }

                context.Products.AddRange(products);

                await context.SaveChangesAsync();
            }
        }
    }
}
