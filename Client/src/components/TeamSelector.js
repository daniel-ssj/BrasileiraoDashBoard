import React, { useState } from 'react'

const TeamSelector = () => {
  const [team, setTeam] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <input
        className='form-control'
        list='teams'
        placeholder='Escolha um time'
        onInput={(e) => setTeam(e.target.value)}
      />
      <datalist id='teams'>
        <option value='América-MG' />
        <option value='Athletico-PR' />
        <option value='Atlético-GO' />
        <option value='Atlético-MG' />
        <option value='Bahia' />
        <option value='Ceará' />
        <option value='Chapecoense' />
        <option value='Corinthians' />
        <option value='Cuiabá' />
        <option value='Flamengo' />
        <option value='Fluminense' />
        <option value='Fortaleza' />
        <option value='Grêmio' />
        <option value='Internacional' />
        <option value='Juventude' />
        <option value='Palmeiras' />
        <option value='Bragantino' />
        <option value='Santos' />
        <option value='São Paulo' />
        <option value='Sport' />
        <option value='Vasco' />
        <option value='Goiás' />
        <option value='Coritiba' />
        <option value='Botafogo-RJ' />
        <option value='Cruzeiro' />
        <option value='Avaí' />
      </datalist>
    </div>
  )
}

export default TeamSelector
