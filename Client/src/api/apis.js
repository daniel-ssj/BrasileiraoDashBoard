const axios = require('axios')

export const teamsApi = axios.create({
  baseURL: 'https://localhost:5001/teams',
})
