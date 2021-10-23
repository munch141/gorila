using gorila.API.Model;
using gorila.API.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace gorila.API.Controllers {
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController {
        public ApplicationDbContext _context { get; set; }

        public ProductsController(ApplicationDbContext context) {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Product>> Get() {
            return await _context.Products.ToListAsync();
        }
    }
}
