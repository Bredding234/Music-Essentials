using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace RazorPageMovies.Pages
{
    public class MovieModel : PageModel
    {
        public void OnGet()
        {
        public int Id { get; set; }

        public string Title { get; set; }

        public int Rate { get; set; }

        public string Description { get; set; }
    }
    }
}
