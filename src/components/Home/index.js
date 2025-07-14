import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Context from '../../Context/Context'
import Banner from '../Banner/index'
import HomeItem from '../HomeItem/index'
import {
  Hdiv,
  HCentered,
  HHIITEMS,
  Inp,
  HSdiv,
  HFImg,
  RetryBtn,
  InpSearch,
  HM,
  MDIV,
  HB,
  HItems,
} from './styles'

const apiStatus = {
  succ: 'SUCCESS',
  fail: 'FAILURE',
  load: 'LOADING',
}

class Home extends Component {
  state = {lis: [], status: apiStatus.load, search: ''}

  componentDidMount() {
    this.oper()
  }

  sChange = event => {
    this.setState({search: event.target.value})
  }

  oper = async () => {
    this.setState({status: apiStatus.load})
    const {search} = this.state
    const jwt = Cookies.get('jwt_token')
    const opt = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
    if (lis.length === 0) {
      return (
        <HCentered>
          <HFImg
            alt="no videos"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <RetryBtn type="button">Retry</RetryBtn>
        </HCentered>
      )
    }
    return (
      <HItems>
        <HHIITEMS>
          {lis.map(e => (
            <HomeItem key={e.id} lis={e} />
          ))}
        </HHIITEMS>
      </HItems>
    )
  }

  renderFail = isLight => {
    const srcc = isLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
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
    const {search} = this.state
    return (
      <Context.Consumer>
        {value => {
          const {isLight} = value
          const col = isLight ? '#f9f9f9' : '#181818'
          return (
            <Hdiv col={col} data-testid="home">
              <Navbar />
              <MDIV col={col}>
                <Sidebar />
                <HB>
                  <Banner />
                  <HM>
                    <HSdiv>
                      <Inp
                        onChange={this.sChange}
                        value={search}
                        type="search"
                      />
                      <InpSearch
                        data-testid="searchButton"
                        type="button"
                        onClick={this.oper}
                      >
                        <FaSearch />
                      </InpSearch>
                    </HSdiv>
                    {this.check()}
                  </HM>
                </HB>
              </MDIV>
            </Hdiv>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
