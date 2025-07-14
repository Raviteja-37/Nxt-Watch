import {FaFire} from 'react-icons/fa'
import Context from '../../Context/Context'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import SavedItem from '../SavedItem/index'

import {Hdiv, MDIV, ItemNav, ItemNavImg, HFImg, NSaved, HB} from './styles'

const SavedVideos = () => {
  const noVid = () => (
    <NSaved>
      <HFImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No saved videos found</h1>
      <p>You can save your videos while watching them</p>
    </NSaved>
  )

  const renderSucc = saved => (
    <>
      <ItemNav>
        <ItemNavImg>
          <FaFire />
        </ItemNavImg>
        <h1>Saved Videos</h1>
      </ItemNav>
      <ul>
        {saved.map(e => (
          <SavedItem lis={e} key={e.id} />
        ))}
      </ul>
    </>
  )

  return (
    <Context.Consumer>
      {value => {
        const {isLight, saved} = value
        const col = isLight ? '#f9f9f9' : '#181818'
        const bol = saved.length === 0
        return (
          <Hdiv col={col} data-testid="savedVideos">
            <Navbar />
            <MDIV col={col}>
              <Sidebar />
              <HB>{bol ? noVid() : renderSucc(saved)}</HB>
            </MDIV>
          </Hdiv>
        )
      }}
    </Context.Consumer>
  )
}
export default SavedVideos
