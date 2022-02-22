using Gorila.FunctionApp.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Gorila.FunctionApp
{
    public class ParseDoc
    {
        private readonly ILogger<ParseDoc> _logger;

        public ParseDoc(ILogger<ParseDoc> log)
        {
            _logger = log;
        }

        [FunctionName("ParseDoc")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)]
            HttpRequest req
        ) {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var body = await new StreamReader(req.Body).ReadToEndAsync();
            var doc = JsonConvert.DeserializeObject<Doc>(body);
            var message = new StringBuilder();

            foreach (var paragraph in doc.Content)
            {
                foreach (var text in paragraph.Content)
                {
                    message.Append($"{(text.IsBold ? '*' : null)}{text.Text}{(text.IsBold ? '*' : null)}");
                }

                message.AppendLine();
            }

            return new OkObjectResult(message.ToString());
        }
    }
}

