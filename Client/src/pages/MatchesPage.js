import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { teamsApi } from '../api/apis'
import MatchDetailCard from '../components/MatchDetailCard'
import { formatMatchDate } from '../utils/FormatMatchDate'
import Pagination from '../components/Pagination'

const MatchesPage = () => {
  const { team, year } = useParams()
  const [matches, setMatches] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [matchesPerPage, setMatchesPerPage] = useState(5)

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await teamsApi.get(`${team}/matches?year=${year}`)
      setMatches(res.data)
    }

    fetchMatches()
  }, [year])

  const indexOfLastMatch = currentPage * matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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

  return (
    <div className='d-flex justify-content-evenly mt-5 mb-5'>
      <div>
        <ol className='nav flex-column bg-secondary p-5'>
          <h3 className='text-white nav-item'>Selecione um ano</h3>
          {years.map((yearMap) => (
            <li key={yearMap}>
              <Link
                to={`/${team}/${yearMap}`}
                className='nav-link text-white fs-5'
              >
                {yearMap}
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h1 className='text-secondary text-center'>
          Jogos do{' '}
          <Link to='/' className='text-white text-decoration-none'>
            {team}
          </Link>{' '}
          em {year}
        </h1>
        {currentMatches.map((match) => (
          <MatchDetailCard
            key={match.id}
            date={formatMatchDate(match.data)}
            day={match.dia}
            arena={match.arena}
            name={team}
            team1={match.mandante}
            team2={match.visitante}
            score1={match.mandantePlacar}
            score2={match.visitantePlacar}
            winner={match.vencedor}
          />
        ))}
        <div className='container mt-3'>
          <div>
            <Pagination
              matchesPerPage={matchesPerPage}
              totalMatches={matches.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchesPage
