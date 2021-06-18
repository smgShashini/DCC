using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly DataContext dc;
        public DoctorController(DataContext dc)
        {
            this.dc = dc;
        }



        //Get all doctors
        [HttpGet]
        public async Task<IActionResult> GetDocList()
        {
            var doclist = await dc.Doctor.ToListAsync();
            return Ok(doclist);


        }


        //Get requested doctors
        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetReqDocList(int id)
        {
            
            

            var queryLondonCustomers = from doc in dc.Doctor
                                       where doc.SpId ==id
                                       select doc;
            

            return Ok(queryLondonCustomers.Count());
        }


    }
}
