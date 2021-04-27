import TeamPage from './pages/TeamPage'
import MatchesPage from './pages/MatchesPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <TeamPage />
          </Route>
          <Route exact path='/:team/:year'>
            <MatchesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
