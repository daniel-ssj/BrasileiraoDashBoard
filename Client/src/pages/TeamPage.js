import React, { useEffect, useState } from 'react'
import { VictoryPie, VictoryTooltip } from 'victory'
import MatchDetailCard from '../components/MatchDetailCard'
import MatchSmallCard from '../components/MatchSmallCard'
import { teamsApi } from '../api/apis'
import { useHistory } from 'react-router-dom'
import { formatMatchDate } from '../utils/FormatMatchDate'

const TeamPage = () => {
  const [team, setTeam] = useState(localStorage.team || 'América-MG')
  const [year, setYear] = useState(localStorage.year || '2021')
  const [teamData, setTeamData] = useState({
    Name: '',

    Last4Matches: [{ ads: 2 }, { fsd: 4 }, { dfgsa: 6 }, { dfgs: 8 }],
  })
  const [pie, setPie] = useState([{ y: 0 }, { y: 0 }, { y: 100 }])

  const history = useHistory()

  const years = [
    '2000',
    '2001',
    '2002',
    '2003',
    '2004',
    '2005',
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await teamsApi.get(`${team}?year=${year}`)
        setTeamData(data.data)

        setPie([
          { x: 'Derrotas', y: data.data.Losses },
          { x: 'Vitórias', y: data.data.Wins },
          { x: 'Empates', y: data.data.Draws },
        ])
      } catch (err) {
        console.error(err.message)
      }
    }

    fetchData()
  }, [team, year])

  let moreMatches = () => {
    history.push(`${team}/${year}`)
  }

  const { Last4Matches } = teamData
  const [first, second, third, fourth] = Last4Matches

  return (
    <div className='mb-2'>
      <div
        className='container'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}
        >
          <h1 className='text-white'>{team}</h1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <select
            className='form-select mb-2'
            id='teams'
            value={localStorage.team || ''}
            onChange={(e) => {
              setTeam(e.target.value)
              localStorage.setItem('team', e.target.value)
            }}
          >
            <option value='América-MG'>América Mineiro</option>
            <option value='Athlético-PR'>Athletico Paranaense</option>
            <option value='Atlético-GO'>Atlético Goianiense</option>
            <option value='Atlético-MG'>Atlético Mineiro</option>
            <option value='Bahia'>Bahia</option>
            <option value='Ceará'>Ceará</option>
            <option value='Chapecoense'>Chapecoense</option>
            <option value='Corinthians'>Corinthians</option>
            <option value='Flamengo'>Flamengo</option>
            <option value='Fluminense'>Fluminense</option>
            <option value='Fortaleza'>Fortaleza</option>
            <option value='Grêmio'>Grêmio</option>
            <option value='Internacional'>Internacional</option>
            <option value='Juventude'>Juventude</option>
            <option value='Palmeiras'>Palmeiras</option>
            <option value='Bragantino'>Redbull Bragantino</option>
            <option value='Santos'>Santos</option>
            <option value='São Paulo'>São Paulo</option>
            <option value='Sport'>Sport</option>
            <option value='Vasco'>Vasco</option>
            <option value='Goiás'>Goiás</option>
            <option value='Coritiba'>Coritiba</option>
            <option value='Botafogo-RJ'>Botafogo</option>
            <option value='Cruzeiro'>Cruzeiro</option>
            <option value='Avaí'>Avaí</option>
          </select>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <select
            className='form-select mb-2'
            id='teams'
            value={localStorage.year || '2021'}
            onChange={(e) => {
              setYear(e.target.value)
              localStorage.setItem('year', e.target.value)
            }}
          >
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        <div style={{ maxWidth: '200px' }}>
          <VictoryPie
            animate={{ easing: 'exp' }}
            width={250}
            height={250}
            colorScale={['#a34d5d', '#4da375', '#7b7f7d']}
            data={pie}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            labelComponent={<VictoryTooltip pointerWidth={20} />}
          />
        </div>
      </div>

      {Last4Matches === undefined || Last4Matches.length === 0 ? (
        <h1 className='text-white text-center mt-5'>
          Não existem dados para esse time no ano selecionado
        </h1>
      ) : (
        <>
          <MatchDetailCard
            title='Ultima partida'
            date={formatMatchDate(first.Data)}
            day={first.Dia}
            arena={first.Arena}
            name={team}
            team1={first.Mandante}
            team2={first.Visitante}
            score1={first.MandantePlacar}
            score2={first.VisitantePlacar}
            winner={first.Vencedor}
          />
          <div className='container mt-4'>
            <h2 className='text-white'>Ultimas partidas</h2>
            <div className='row'>
              <div className='col-4'>
                <MatchSmallCard
                  date={formatMatchDate(second.Data)}
                  day={second.Dia}
                  arena={second.Arena}
                  name={team}
                  team1={second.Mandante}
                  team2={second.Visitante}
                  score1={second.MandantePlacar}
                  score2={second.VisitantePlacar}
                  winner={second.Vencedor}
                />
              </div>
              <div className='col-4'>
                <MatchSmallCard
                  date={formatMatchDate(third.Data)}
                  day={third.Dia}
                  arena={third.Arena}
                  name={team}
                  team1={third.Mandante}
                  team2={third.Visitante}
                  score1={third.MandantePlacar}
                  score2={third.VisitantePlacar}
                  winner={third.Vencedor}
                />
              </div>
              <div className='col-4'>
                <MatchSmallCard
                  date={formatMatchDate(fourth.Data)}
                  day={fourth.Dia}
                  arena={fourth.Arena}
                  name={team}
                  team1={fourth.Mandante}
                  team2={fourth.Visitante}
                  score1={fourth.MandantePlacar}
                  score2={fourth.VisitantePlacar}
                  winner={fourth.Vencedor}
                />
              </div>
              <div
                className='col align-self-center text-white mt-3'
                style={{ cursor: 'pointer', maxWidth: '120px' }}
                onClick={moreMatches}
              >
                <h4>Ver mais</h4>
                <i className='fas fa-arrow-circle-right fa-3x'></i>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default TeamPage
