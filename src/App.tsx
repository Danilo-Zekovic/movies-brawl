import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import FavoritesPage from './pages/FavoritesPage'
import HomePage from './pages/HomePage'
import Layout from './components/Layout'

import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Layout>
        <Switch>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
