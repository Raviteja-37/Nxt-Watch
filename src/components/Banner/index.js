import {FaWindowClose} from 'react-icons/fa'
import Context from '../../Context/Context'
import {BanLogo, BanClose, Pdiv} from './styles'

const Banner = () => (
  <Context.Consumer>
    {value => {
      const {ban, banChange} = value
      if (!ban) return null
      return (
        <Pdiv data-testid="banner">
          <BanClose data-testid="close" type="button" onClick={banChange}>
            <FaWindowClose />
          </BanClose>
          <BanLogo
            alt="nxt watch logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
          <button type="button">GET IT NOW</button>
        </Pdiv>
      )
    }}
  </Context.Consumer>
)

export default Banner
