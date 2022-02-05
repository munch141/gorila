using System.Collections.Generic;
using System.Linq;

namespace Gorila.FunctionApp.Model
{
    public class Doc {
        public List<Paragraph> Content { get; set; } = new List<Paragraph>();
    }

    public class Paragraph {
        public List<ParagraphText> Content { get; set; } = new List<ParagraphText>();
    }

    public class ParagraphText {
        public string Text { get; set; }
        public List<Mark> Marks { get; set; } = new List<Mark>();

        public bool IsBold => Marks.Any(mark => mark.Type == "bold");
    }

    public class Mark {
        public string Type { get; set; }
    }
}