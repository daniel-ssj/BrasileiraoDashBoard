import React from 'react'

const MatchDetailCard = (props) => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col align-self-start'>
          <div
            className={
              props.winner === props.name
                ? 'card text-white bg-success p-5'
                : props.winner === '-'
                ? 'card text-white bg-secondary p-5'
                : 'card text-white bg-danger p-5'
            }
          >
            <div className='card-body'>
              <h4 className='card-title'>{props.title}</h4>
              <p className='card-text'>
                {props.date}, {props.day} - {props.arena}
              </p>
              <h4 className='card-text'>
                {props.team1} x {props.team2}
              </h4>
              <div
                className='border border-light text-center'
                style={{ width: '50px', padding: '5px' }}
              >
                {props.score1} - {props.score2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchDetailCard
