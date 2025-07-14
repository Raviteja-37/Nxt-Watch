import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {LogDiv, Div, LogForm, Logbtn, LogLogo, Img} from './styles'

class Login extends Component {
  state = {type: true, username: '', password: '', error: ''}

  renderSucc = jwt => {
    const {history} = this.props
    Cookies.set('jwt_token', jwt, {expires: 1})
    history.replace('/')
  }

  oper = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const resp = await fetch('https://apis.ccbp.in/login', option)
    const res = await resp.json()
    console.log(res)
    if (resp.ok) {
      this.renderSucc(res.jwt_token)
    } else {
      this.setState({error: res.error_msg})
    }
  }

  userChange = event => {
    this.setState({username: event.target.value})
  }

  passChange = event => {
    this.setState({password: event.target.value})
  }

  toggle = () => {
    this.setState(p => ({type: !p.type}))
  }

  render() {
    const {type, username, password, error} = this.state
    const jwt = Cookies.get('jwt_token')
    if (jwt !== undefined) {
      return <Redirect to="/" />
    }
    const isError = error !== ''

    return (
      <LogDiv>
        <Div>
          <LogLogo>
            <Img
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            />
          </LogLogo>
          <LogForm onSubmit={this.oper}>
            <label htmlFor="user">USERNAME</label>
            <input
              onChange={this.userChange}
              value={username}
              id="user"
              type="text"
            />
            <label htmlFor="pass">PASSWORD</label>
            <input
              onChange={this.passChange}
              value={password}
              id="pass"
              type={type ? 'password' : 'text'}
            />
            <div>
              <input
                onClick={this.toggle}
                style={{cursor: 'pointer'}}
                id="show"
                type="checkbox"
              />
              <label htmlFor="show">Show Password</label>
            </div>
            {isError ? <p>{error}</p> : null}
            <Logbtn type="submit">Login</Logbtn>
          </LogForm>
        </Div>
      </LogDiv>
    )
  }
}

export default Login
