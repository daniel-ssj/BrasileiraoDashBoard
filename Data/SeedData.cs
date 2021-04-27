using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;

namespace BrasileiraoDashboard.Data
{
    public class SeedData
    {
        public static void Initialize(MatchesDbContext context)
        {
            using (var reader = new StreamReader("C:\\Users\\ddddd\\Documents\\BrasileiraoDashboard\\Resources\\campeonato-brasileiro-full.csv"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                var matches = csv.GetRecords<MatchInput>();

                foreach(var match in matches)
                {
                    context.Matches.Add(match);
                }
            }

            context.SaveChanges();
        } 
    }
}
