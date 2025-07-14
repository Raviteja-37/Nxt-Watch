import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Context from '../../Context/Context'
import {Hdiv, HFImg, HM, MDIV, HB} from './styles'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isLight} = value
      const col = isLight ? '#f9f9f9' : '#181818'
      const srcc = isLight
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <Hdiv>
          <Navbar />
          <MDIV col={col}>
            <Sidebar />
            <HB>
              <HM>
                <HFImg alt="not found" src={srcc} />
                <h1>Page Not Found</h1>
                <p>We are sorry, the page you requested could not be found.</p>
              </HM>
            </HB>
          </MDIV>
        </Hdiv>
      )
    }}
  </Context.Consumer>
)

export default NotFound
