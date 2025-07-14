import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Context from '../../Context/Context'
import TrendingItem from '../TrendingItem/index'
import {
  Hdiv,
  HCentered,
  ItemNav,
  ItemNavImg,
  HFImg,
  RetryBtn,
  HM,
  MDIV,
  HB,
} from './styles'

const apiStatus = {
  succ: 'SUCCESS',
  fail: 'FAILURE',
  load: 'LOADING',
}

class Trending extends Component {
  state = {lis: [], status: apiStatus.load}

  componentDidMount() {
    this.oper()
  }

  oper = async () => {
    this.setState({status: apiStatus.load})
    const jwt = Cookies.get('jwt_token')
    const opt = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/videos/trending`
    const resp = await fetch(url, opt)
    const res = await resp.json()
    if (resp.ok) {
      const upd = res.videos.map(e => ({
        id: e.id,
        channel: {
          name: e.channel.name,
          profileImageUrl: e.channel.profile_image_url,
        },
        publishedAt: e.published_at,
        thumbnailUrl: e.thumbnail_url,
        title: e.title,
        viewCount: e.view_count,
      }))
      this.setState({lis: upd, status: apiStatus.succ})
    } else {
      this.setState({status: apiStatus.fail})
    }
  }

  renderSucc = () => {
    const {lis} = this.state

    return (
      <div>
        <ItemNav>
          <ItemNavImg>
            <FaFire />
          </ItemNavImg>
          <h1>Trending</h1>
        </ItemNav>
        <ul>
          {lis.map(e => (
            <TrendingItem key={e.id} lis={e} />
          ))}
        </ul>
      </div>
    )
  }

  renderFail = isLight => {
    const srcc = isLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <HCentered>
        <HFImg alt="failure view" src={srcc} />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. Pleake try again.
        </p>
        <RetryBtn onClick={this.oper} type="button">
          Retry
        </RetryBtn>
      </HCentered>
    )
  }

  renderLoad = () => (
    <HCentered data-testid="loader">
      <Loader type="ThreeDots" color="lightblue" height="50" width="50" />
    </HCentered>
  )

  check = isLight => {
    const {status} = this.state
    switch (status) {
      case apiStatus.succ:
        return this.renderSucc()
      case apiStatus.fail:
        return this.renderFail(isLight)
      case apiStatus.load:
        return this.renderLoad()
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isLight} = value
          const col = isLight ? '#f9f9f9' : '#181818'
          return (
            <Hdiv col={col} data-testid="trending">
              <Navbar />
              <MDIV col={col}>
                <Sidebar />
                <HB>
                  <HM>{this.check()}</HM>
                </HB>
              </MDIV>
            </Hdiv>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Trending
