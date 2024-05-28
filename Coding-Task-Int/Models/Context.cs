using Microsoft.EntityFrameworkCore;

namespace Coding_Task_Int.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        // DbSet is a property provided by EF which is a representation of entities in the database
        public DbSet<FizzBuzzNums> Numbers { get; set; }
    }
}
