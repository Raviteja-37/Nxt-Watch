import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import {SVITEM, SVIRow, SVImg, SVIDet} from './styles'

const SavedItem = props => {
  const {lis} = props
  const years = formatDistanceToNowStrict(new Date(lis.publishedAt), {
    addSuffix: true,
  })
  console.log(lis)
  return (
    <Link
      style={{color: 'inherit', textDecoration: 'inherit'}}
      to={`/videos/${lis.id}`}
    >
      <SVITEM>
        <SVImg alt="video thumbnail" src={lis.thumbnailUrl} />
        <SVIDet>
          <p>{lis.title}</p>
          <p>{lis.channel.name}</p>
          <SVIRow>
            <p>{lis.viewCount} views</p>
            <p>{years}</p>
          </SVIRow>
        </SVIDet>
      </SVITEM>
    </Link>
  )
}

export default SavedItem
