import {Link} from 'react-router-dom'
import {SVITEM, SVIRow, SVImg, SVIDet} from './styles'

const GamingItem = props => {
  const {lis} = props
  return (
    <Link
      style={{color: 'inherit', textDecoration: 'inherit'}}
      to={`/videos/${lis.id}`}
    >
      <SVITEM>
        <SVImg alt="video thumbnail" src={lis.thumbnailUrl} />
        <SVIDet>
          <p>{lis.title}</p>
          <SVIRow>
            <p>{lis.viewCount} Watching Worldwide</p>
          </SVIRow>
        </SVIDet>
      </SVITEM>
    </Link>
  )
}

export default GamingItem
