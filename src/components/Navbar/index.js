import Popup from 'reactjs-popup'
import {FaSun, FaMoon} from 'react-icons/fa'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import Context from '../../Context/Context'

import {
  Nav,
  LefTT,
  Navbtn,
  PopDiv,
  Themebtn,
  Navleft,
  Navprof,
  NavLogo,
  PopBtn,
  PopRow,
} from './styles'

const Navbar = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Context.Consumer>
      {value => {
        const {isLight, isLighChange} = value
        const col = isLight ? '#fffaf0' : '#1e1e2f'
        const srcc = isLight
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

        const theme = isLight ? <FaMoon /> : <FaSun />

        return (
          <Nav col={col}>
            <Link to="/">
              <NavLogo alt="website logo" src={srcc} />
            </Link>

            <Navleft>
              <LefTT>
                <li>
                  <Themebtn
                    type="button"
                    data-testid="theme"
                    onClick={isLighChange}
                  >
                    {theme}
                  </Themebtn>
                </li>
                <li>
                  <Navprof
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </li>
                <li>
                  <Popup modal trigger={<Navbtn type="button">Logout</Navbtn>}>
                    {close => (
                      <PopDiv>
                        <p>Are you sure, you want to logout</p>
                        <PopRow>
                          <PopBtn outline onClick={() => close()} type="button">
                            Cancel
                          </PopBtn>
                          <PopBtn onClick={logout} type="button">
                            Confirm
                          </PopBtn>
                        </PopRow>
                      </PopDiv>
                    )}
                  </Popup>
                </li>
              </LefTT>
            </Navleft>
          </Nav>
        )
      }}
    </Context.Consumer>
  )
}

export default withRouter(Navbar)
