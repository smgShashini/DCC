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
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly DataContext dc;
        public DoctorController(DataContext dc)
        {
            this.dc = dc;
        }

        //Http get method here


        [HttpGet]
        public async Task<IActionResult> GetDocList(int id)
        {
            var doclist = await dc.Doctors.
               FromSqlRaw(@"SELECT * FROM Doctors ").
               ToListAsync();
            return Ok(doclist);


        }


    }
}
