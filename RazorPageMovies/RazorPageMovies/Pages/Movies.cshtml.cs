using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPageMovies.Data.Models;

namespace RazorPageMovies.Pages
{
    public class MoviesModel : PageModel
    {
        public List<Movie> Movies { get; set; }

        public void OnGet()
        {
            Movies = new List<Movie>()
            {
                new Movie()
                {
                    Id = 1,
                    Title = "First Movie Title",
                    Rate = 10,
                    Description = "First Movie Description goes here..."
                },new Movie()
                {
                    Id = 2,
                    Title = "Second Movie Title",
                    Rate = 7,
                    Description = "Second Movie Description goes here..."
                },new Movie()
                {
                    Id = 3,
                    Title = "Third Movie Title",
                    Rate = 5,
                    Description = "Third Movie Description goes here..."
                },new Movie()
                {
                    Id = 4,
                    Title = "Fourth Movie Title",
                    Rate = 4,
                    Description = "Fourth Movie Description goes here..."
                }
            };
          }
        }
    }
}
