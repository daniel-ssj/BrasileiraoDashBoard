using System.Collections;
using Microsoft.EntityFrameworkCore;

namespace BrasileiraoDashboard.Data
{
    public class MatchesDbContext : DbContext
    {
        public MatchesDbContext(DbContextOptions options) : base(options)
        {
            
        }
        
        public DbSet<MatchInput> Matches { get; set; }
    }
}
