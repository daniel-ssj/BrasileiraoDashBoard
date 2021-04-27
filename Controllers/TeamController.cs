using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrasileiraoDashboard.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using BrasileiraoDashboard.Services;

namespace BrasileiraoDashboard.Controllers
{
    [ApiController]
    [Route("teams")]
    public class TeamController : ControllerBase
    {
        private readonly MatchesDbContext _context;
        private readonly TeamService _service;

        public TeamController(MatchesDbContext context)
        {
            _context = context;
            _service = new TeamService(context);
        }

        [HttpGet]
        [Route("{team}")]
        public async Task<string> GetTeamInfo(string team, int year) { 
           var teamInfo = await _service.CreateTeamInfo(team, year);

            return JsonConvert.SerializeObject(teamInfo, Formatting.Indented);
        }

        [HttpGet]
        [Route("{team}/matches")]
        public async Task<List<MatchInput>> GetTeamMatchesByYear(string team, int year) { 
           return await _service.GetAllMatches(team, year);
        }
    }
}
