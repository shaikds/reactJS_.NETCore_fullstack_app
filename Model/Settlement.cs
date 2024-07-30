
using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Model
{
    public class Settlement 
    {
        [Key]
        public string name { get; set; }

        public Settlement(string name) {
            this.name = name;
        }



    }
}
