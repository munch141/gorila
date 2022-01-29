using gorila.API.Persistence;
using Gorila.API.Filters;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

#region Add services to the container.

if (builder.Configuration.GetValue<bool>("UseInMemoryDatabase"))
{
    builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseInMemoryDatabase("gorilaDb"));
}
else
{
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(
            builder.Configuration.GetConnectionString("DefaultConnection"),
            builder => builder.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)
        )
    );
}

builder.Services.AddHealthChecks().AddDbContextCheck<ApplicationDbContext>();
builder.Services.AddControllers();
builder.Services.AddRouting(options => { options.LowercaseUrls = true; });
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "gorila API", Version = "v1" });
    c.OperationFilter<FileUploadOperationFilter>();
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.Configure<ApiBehaviorOptions>(options =>
{
    options.SuppressModelStateInvalidFilter = true;
});

const string localCors = "_localCors";
const string devCors = "_devCors";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: devCors,
        builder =>
        {
            builder.WithOrigins("https://latiendadelgorila.dev");
            builder.AllowAnyHeader();
            builder.AllowAnyMethod();
        }
    );
    
    options.AddPolicy(
        name: localCors,
        builder =>
        {
            builder.WithOrigins("http://localhost:8081");
            builder.AllowAnyHeader();
            builder.AllowAnyMethod();
        }
    );
});

#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors(builder.Environment.IsDevelopment() ? localCors : devCors);
app.MapControllers();

using var scope = app.Services.CreateScope();

try
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();

    if (context.Database.IsNpgsql())
    {
        context.Database.Migrate();
    }

    await ApplicationDbContextSeed.SeedAsync(context);
}
catch (Exception ex)
{
    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();

    logger.LogError(ex, "An error occurred while migrating or seeding the database.");

    throw;
}

app.Run();
