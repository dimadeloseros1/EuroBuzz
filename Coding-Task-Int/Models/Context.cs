using Microsoft.EntityFrameworkCore;

namespace Coding_Task_Int.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<FizzBuzzNums> Numbers { get; set; }
    }
}
