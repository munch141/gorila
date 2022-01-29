using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Gorila.API.Filters
{
    public class FileUploadOperationFilter : IOperationFilter
    {
        public void Apply(OpenApiOperation operation, OperationFilterContext context)
        {
            var mimeType = "multipart/form-data";
            var requestBody = operation.RequestBody;

            if (requestBody == null || !requestBody.Content.Any(x => x.Key.Equals(mimeType, StringComparison.InvariantCultureIgnoreCase)))
                return;

            var fileParams = context.MethodInfo.GetParameters().Where(p => p.ParameterType == typeof(IFormFile));
            
            requestBody.Content[mimeType].Schema.Properties = fileParams.ToDictionary(
                k => k.Name,
                v => new OpenApiSchema
                    {
                        Type = "string",
                        Format = "binary"
                    }
            );
        }
    }
}
