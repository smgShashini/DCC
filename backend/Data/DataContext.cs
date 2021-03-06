using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Data
{
    public class DataContext :DbContext

    {
        

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Specialization> Splist { get; set; }
        public DbSet<Doctor> Doctor{ get; set; }

        public DbSet<User> Users { get; set; }

    }
}
