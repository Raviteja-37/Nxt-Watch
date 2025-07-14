import {Link} from 'react-router-dom'
import Context from '../../Context/Context'
import {HIDiv, HImg, HILow, HIDet, HIProf} from './styles'

const HomeItem = props => (
  <Context.Consumer>
    {value => {
      const {lis} = props
      const {isLight} = value
      const col = isLight ? '#f9f9f9' : '#181818'
      return (
        <Link
          style={{color: 'inherit', textDecoration: 'inherit'}}
          to={`/videos/${lis.id}`}
        >
          <HIDiv col={col}>
            <HImg alt="video thumbnail" src={lis.thumbnailUrl} />
            <HILow>
              <HIProf alt="channel logo" src={lis.channel.profileImageUrl} />
              <HIDet>
                <p>{lis.title}</p>
                <p>{lis.channel.name}</p>
                <HILow>
                  <p>{lis.viewCount}</p>
                  <p>{lis.publishedAt}</p>
                </HILow>
              </HIDet>
            </HILow>
          </HIDiv>
        </Link>
      )
    }}
  </Context.Consumer>
)

export default HomeItem
