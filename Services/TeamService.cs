using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using BrasileiraoDashboard.Data;
using Microsoft.EntityFrameworkCore;

namespace BrasileiraoDashboard.Services
{
    public class TeamService
    {
        private readonly MatchesDbContext _context;

        public TeamService(MatchesDbContext context)
        {
            _context = context;
        }
        
        public async Task<TeamInfo> CreateTeamInfo(string team, int year)
        {
            var matchList = _context.Matches.Where(
               m => (string.Equals(m.Mandante, team, StringComparison.OrdinalIgnoreCase) || string.Equals(m.Visitante, team, StringComparison.OrdinalIgnoreCase))
                && m.Data.Year == year
                );

            var wins = await matchList.Where(
                m => string.Equals(m.Vencedor, team, StringComparison.OrdinalIgnoreCase)
                ).CountAsync();

            var draws = await matchList.Where(
                m => (string.Equals(m.Mandante, team, StringComparison.OrdinalIgnoreCase) || string.Equals(m.Visitante, team, StringComparison.OrdinalIgnoreCase))
                    && string.Equals(m.Vencedor, "-")
                    ).CountAsync();

            var losses = await matchList.Where(
                m => (string.Equals(m.Mandante, team, StringComparison.OrdinalIgnoreCase) || string.Equals(m.Visitante, team, StringComparison.OrdinalIgnoreCase))
                    && !string.Equals(m.Vencedor, team, StringComparison.OrdinalIgnoreCase) && !string.Equals(m.Vencedor, "-")
                    ).CountAsync();

            var last4Matches = await matchList.Where(
                m => string.Equals(m.Mandante, team, StringComparison.OrdinalIgnoreCase) || string.Equals(m.Visitante, team, StringComparison.OrdinalIgnoreCase)
                ).OrderByDescending(m => m.Data).Take(4).ToListAsync();        

            return new TeamInfo(wins, losses, draws, last4Matches);
        }

        public async Task<List<MatchInput>> GetAllMatches(string team, int year)
        {
            return await _context.Matches.Where(
                m => (string.Equals(m.Mandante, team, StringComparison.OrdinalIgnoreCase) || string.Equals(m.Visitante, team, StringComparison.OrdinalIgnoreCase))
                && m.Data.Year == year).ToListAsync();
        }
    }
}
