import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Context from './Context/Context'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLight: true, ban: true, saved: []}

  isLighChange = () => {
    this.setState(p => ({isLight: !p.isLight}))
  }

  banChange = () => {
    this.setState({ban: false})
  }

  addSaved = lis => {
    this.setState(p => ({
      saved: [...p.saved, lis],
    }))
  }

  delSaved = lis => {
    const {saved} = this.state
    const upd = saved.filter(e => e.id !== lis.id)
    this.setState({saved: upd})
  }

  render() {
    const {isLight, ban, saved} = this.state
    console.log(saved)
    return (
      <Context.Provider
        value={{
          isLight,
          isLighChange: this.isLighChange,
          ban,
          banChange: this.banChange,
          saved,
          addSaved: this.addSaved,
          delSaved: this.delSaved,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />

            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Context.Provider>
    )
  }
}

export default App
