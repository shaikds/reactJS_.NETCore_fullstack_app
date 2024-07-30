using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace WebApplication2.Model.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Settlement>  settlements { get; set; }
        public readonly IConfiguration configuration;
        
        //ctr
        public AppDbContext(IConfiguration config) 
        {
            this.configuration = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(configuration  .GetConnectionString("DefaultConnection"));
            options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
        }
    }
}
