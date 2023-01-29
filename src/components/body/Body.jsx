import './body.scss';
import location from "../../assets/icon-location.svg";
import twitter from "../../assets/icon-twitter.svg";
import website from "../../assets/icon-website.svg";
import company from "../../assets/icon-company.svg";

 
const Body = ({data}) => {
  
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const  formatDate = (dateString) => {
    const b = dateString.split('T')[0].split('-')
    const monthNumber = Number(b[1]) - 1;
    return `Joined  ${b[2]} ${monthsShort[monthNumber]} ${b[0]}`
  }
  return (
    <>
      {data && (
        <div className='body'>
          <div className='profile-photo'>
        <img src={data.data.avatar_url} alt='profile'/>
      </div>
      <div className='info'>
        <div className='name'>
          <h2>{data.data.name}</h2>
          <p>{formatDate(data.data.created_at)}</p>
        </div>
        <div className='github-name'>@{data.data.login}</div>
        <div className='bio'>{`${data.data.bio ? data.data.bio : "This profile has no bio "}`}</div>
        <div className='followers'>
          <div >
            <p className='title'>Repos</p>
            <p className='count'>{`${data.data.public_repos ? data.data.public_repos : "0"}`}</p>
          </div>
          <div >
            <p className='title'>Folowers</p>
            <p className='count'>{`${data.data.followers ? data.data.followers : "0"}`}</p>
          </div>
          <div >
            <p className='title'>Following</p>
            <p className='count'>{`${data.data.following ? data.data.following : "0"}`}</p>
          </div>
        </div>
        <div className='footer'>
          <div className='left'>
            <div className={`${data.data.location ? "" : "not-available"}`}>
              <img src={location} alt="location icon"/>
              <p>{`${data.data.location ? data.data.location : "Not Available"}`}</p>
            </div>
            <div className={`${data.data.login ? "" : "not-available"}`}>
              <img src={website} alt="website icon"/>
              <p>{`${data.data.login
 ? data.data.login
 : "Not Available"}`}</p>
            </div>
          </div>
          <div className='right'>
          <div className={`${data.data.twitter_username? "" : "not-available"}`}>
              <img src={twitter} alt="twitter icon"/>
              <p>{`${data.data.twitter_username
 ? data.data.twitter_username
 : "Not Available"}`}</p>
            </div>
            <div className={`${data.data.blog ? "" : "not-available"}`}>
              <img src={company} alt="company icon"/>
              <p>{`${data.data.blog
 ? data.data.blog
 : "Not Available"}`}</p>
            </div>
          </div>
        </div>
      </div>
        </div>
      )}
    </>
  )
}

export default Body