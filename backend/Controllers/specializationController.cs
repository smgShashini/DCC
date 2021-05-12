using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class specializationController : ControllerBase
    {
        private readonly DataContext dc;
        public specializationController(DataContext dc)
        {
            this.dc = dc;
        }


        [HttpGet]
        public async Task<IActionResult> GetSp()
        {
            var splist = await dc.Splist.ToListAsync();
            return Ok(splist);
        }
    }
}
