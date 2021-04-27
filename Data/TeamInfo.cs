using System.Collections.Generic;

namespace BrasileiraoDashboard.Data
{
    public class TeamInfo
    {
        public TeamInfo(int wins, int losses, int draws, List<MatchInput> last4Matches)
        {
            Wins = wins;
            Losses = losses;
            Draws = draws;
            Last4Matches = last4Matches;
        }

        public int Wins { get; private set; }
        public int Losses { get; private set; }
        public int Draws { get; private set; }
        public List<MatchInput> Last4Matches { get; private set; }
    }
}
