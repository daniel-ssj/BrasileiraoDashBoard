using System;

namespace BrasileiraoDashboard.Data
{
    public class MatchInput
    {
        public int ID { get; set; }
        public DateTime Data { get; set; }
        public string Dia { get; set; }
        public string Mandante { get; set; }
        public string Visitante { get; set; }
        public string Vencedor { get; set; }
        public string Arena { get; set; }
        public int MandantePlacar { get; set; }
        public int VisitantePlacar { get; set; }
    }
}
