import {Link} from 'react-router-dom'
import {FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import Context from '../../Context/Context'
import {Side, Sidep, SideItem, SideIcon} from './styles'

const Sidebar = () => (
  <Context.Consumer>
    {value => {
      const {isLight} = value
      const col = isLight ? '#fffaf0' : '#1e1e2f'
      return (
        <Side col={col}>
          <div>
            <Link style={{color: 'inherit', textDecoration: 'inherit'}} to="/">
              <SideItem>
                <FaHome />
                <Sidep>Home</Sidep>
              </SideItem>
            </Link>
            <Link
              style={{color: 'inherit', textDecoration: 'inherit'}}
              to="/trending"
            >
              <SideItem>
                <FaFire />
                <Sidep>Trending</Sidep>
              </SideItem>
            </Link>
            <Link
              style={{color: 'inherit', textDecoration: 'inherit'}}
              to="/gaming"
            >
              <SideItem>
                <SiYoutubegaming />
                <Sidep>Gaming</Sidep>
              </SideItem>
            </Link>
            <Link
              style={{color: 'inherit', textDecoration: 'inherit'}}
              to="/saved-videos"
            >
              <SideItem>
                <CgPlayListAdd />
                <Sidep>Saved Videos</Sidep>
              </SideItem>
            </Link>
          </div>
          <div>
            <p>CONTACT US</p>
            <div>
              <SideIcon
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <SideIcon
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <SideIcon
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </div>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </div>
        </Side>
      )
    }}
  </Context.Consumer>
)

export default Sidebar
