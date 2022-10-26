using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using backend_app.Models;

namespace backend_app.Controllers
{
    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {
        SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["conn"].ConnectionString);
        SqlCommand cmd = null;
        SqlDataAdapter da = null;


        [HttpPost]
        [Route("Registration")]

        public string Registration(Employee employee)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("usp_Registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@firstName", employee.firstName);
                cmd.Parameters.AddWithValue("@lastName", employee.lastName);
                cmd.Parameters.AddWithValue("@email", employee.email);
                cmd.Parameters.AddWithValue("@passWrd", employee.passWrd);
                cmd.Parameters.AddWithValue("@confirmPassword", employee.confirmPassword);
                cmd.Parameters.AddWithValue("@IsActive", employee.IsActive);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Data Inserted.";
                }
                else
                {
                    msg = "Error.";
                }

            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;

        }


        [HttpPost]
        [Route("Login")]

        public string Login(Employee employee)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("usp_Login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@userName", employee.userName);
                da.SelectCommand.Parameters.AddWithValue("@password", employee.password);
                DataTable dt = new DataTable();
                da.Fill(dt);

                if (dt.Rows.Count > 0)
                {
                    msg = "User is valid.";
                }
                else
                {
                    msg = "User is Invalid";
                }



            }
            catch (Exception ex)
            {
                msg = ex.Message;
            }
            return msg;

        }





            }

        }

