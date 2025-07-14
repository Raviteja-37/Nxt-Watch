import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNowStrict} from 'date-fns'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Navbar from '../Navbar/index'
import Sidebar from '../Sidebar/index'
import Context from '../../Context/Context'
import {
  VIDiv,
  HILow,
  Row,
  HIDet,
  HIProf,
  VItem,
  HCentered,
  HFImg,
  RetryBtn,
  VIDIV,
  VILike,
  VILow,
  VIBtn,
} from './styles'

const apiStatus = {
  succ: 'SUCCESS',
  fail: 'FAILURE',
  load: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    status: apiStatus.load,
    lis: [],
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.oper()
  }

  oper = async () => {
    this.setState({status: apiStatus.load})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwt = Cookies.get('jwt_token')
    const opt = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    }
    const resp = await fetch(`https://apis.ccbp.in/videos/${id}`, opt)
    const res = await resp.json()
    if (resp.ok) {
      const upd = {
        id: res.video_details.id,
        channel: {
          name: res.video_details.channel.name,
          profileImageUrl: res.video_details.channel.profile_image_url,
          subscriberCount: res.video_details.channel.subscriber_count,
        },
        description: res.video_details.description,
        thumbnailUrl: res.video_details.thumbnail_url,
        publishedAt: res.video_details.published_at,
        title: res.video_details.title,
        videoUrl: res.video_details.video_url,
        viewCount: res.video_details.view_count,
      }

      this.setState({lis: upd, status: apiStatus.succ})
    } else {
      this.setState({status: apiStatus.fail})
    }
  }

  renderFail = isLight => {
    const srcc = isLight
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <HCentered style={{marginLeft: '20vw'}}>
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

  lik = () => {
    this.setState(prev => {
      if (prev.isLike) {
        return {isLike: false}
      }
      return {isLike: true, isDislike: false}
    })
  }

  dislik = () => {
    this.setState(prev => {
      if (prev.isDislike) {
        return {isDislike: false}
      }
      return {isDislike: true, isLike: false}
    })
  }

  saveChange = () => {
    this.setState(p => ({isSave: !p.isSave}))
  }

  renderSucc = (saved, addSaved, delSaved) => {
    const {lis, isLike, isDislike} = this.state
    const years = formatDistanceToNowStrict(new Date(lis.publishedAt), {
      addSuffix: true,
    })
    const isSaved = saved.some(item => item.id === lis.id)

    const toggleSave = () => {
      if (isSaved) {
        delSaved(lis)
      } else {
        addSaved(lis)
      }
    }

    return (
      <VItem>
        <ReactPlayer width="100%" height="640px" url={lis.videoUrl} />
        <VILow>
          <p>{lis.title}</p>
          <VILike>
            <Row>
              <p>{lis.viewCount} views</p>
              <p>{years} ago</p>
            </Row>
            <Row>
              <VIBtn
                onClick={this.lik}
                type="button"
                active={isLike}
                data-testid="likeButton"
              >
                <AiFillLike />
                Like
              </VIBtn>
              <VIBtn
                onClick={this.dislik}
                type="button"
                active={isDislike}
                data-testid="dislikeButton"
              >
                <AiFillDislike />
                Dislike
              </VIBtn>

              <VIBtn active={isSaved} onClick={toggleSave}>
                <CgPlayListAdd />
                <p>{isSaved ? 'Saved' : 'Save'}</p>
              </VIBtn>
            </Row>
          </VILike>
          <hr color="wheat" width="95%" />
          <HILow>
            <HIProf alt="channel logo" src={lis.channel.profileImageUrl} />
            <HIDet>
              <p>{lis.channel.name}</p>
              <p>{lis.channel.subscriberCount} subscribers</p>
              <HILow>
                <p>{lis.description}</p>
              </HILow>
            </HIDet>
          </HILow>
        </VILow>
      </VItem>
    )
  }

  renderLoad = () => (
    <HCentered data-testid="loader">
      <Loader type="ThreeDots" color="lightblue" height="50" width="50" />
    </HCentered>
  )

  check = (isLight, saved, addSaved, delSaved) => {
    const {status} = this.state
    switch (status) {
      case apiStatus.succ:
        return this.renderSucc(saved, addSaved, delSaved)
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
          const {isLight, saved, addSaved, delSaved} = value
          const col = isLight ? '#f9f9f9' : '#0f0f0f'
          return (
            <VIDiv data-testid="videoItemDetails" col={col}>
              <Navbar />
              <VIDIV col={col}>
                <Sidebar />
                <div
                  style={{width: '100%', height: '100vh', overflow: 'scroll'}}
                >
                  {this.check(isLight, saved, addSaved, delSaved)}
                </div>
              </VIDIV>
            </VIDiv>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetails
