import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Context from '../../Context/Context'
import GamingItem from '../GamingItem/index'
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
  FlexWrap,
} from './styles'

const apiStatus = {
  succ: 'SUCCESS',
  fail: 'FAILURE',
  load: 'LOADING',
}

class Gaming extends Component {
  state = {lis: [], status: apiStatus.load}

  componentDidMount() {
    console.log('Y')
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
    const url = `https://apis.ccbp.in/videos/gaming`
    const resp = await fetch(url, opt)
    const res = await resp.json()
    console.log(res)
    if (resp.ok) {
      const upd = res.videos.map(e => ({
        id: e.id,
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
      <>
        <ItemNav>
          <ItemNavImg>
            <SiYoutubegaming />
          </ItemNavImg>
          <h1>Gaming</h1>
        </ItemNav>
        <FlexWrap>
          {lis.map(e => (
            <GamingItem key={e.id} lis={e} />
          ))}
        </FlexWrap>
      </>
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
            <Hdiv col={col} data-testid="gaming">
              <Navbar />
              <MDIV col={col}>
                <Sidebar />
                <HB>
                  <HM>{this.check(isLight)}</HM>
                </HB>
              </MDIV>
            </Hdiv>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
