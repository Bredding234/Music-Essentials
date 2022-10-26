using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_app.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string firstName { get; set; }

        public string lastName { get; set; }
        public string email { get; set; }


        public string passWrd { get; set; }

        public string confirmPassword { get; set; }


        public string userName { get; set; }

       public string password { get; set; }

        public int IsActive { get; set; }
    }
}