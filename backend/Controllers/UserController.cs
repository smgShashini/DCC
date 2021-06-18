using backend.Data;
using backend.Models;
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
    public class UserController : ControllerBase
    {
        private readonly DataContext dc;
        public UserController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserList()
        {
            var userlist = await dc.Users.ToListAsync();
            return Ok(userlist);
        }

        //Get waiting number
        [HttpGet("get/{docName}/{date}")]
        public async Task<IActionResult> GetWaitingNumber(string docName,string date)
        {



            var waitingList = from user in dc.Users
                                       where user.DocName == docName && user.AppointmentDate==date
                                       select user;


            return Ok(waitingList.Count());
        }



        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {
            await dc.Users.AddAsync(user);
            await dc.SaveChangesAsync();

            return Ok(user);
        }

    }
}
