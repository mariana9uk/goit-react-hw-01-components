
import { Card, Description, Stats } from "./profile.styled"


export const Profile= ({userData})=>{
return (
  <Card>
  <Description>
    <img
      src={userData.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{userData.username}</p>
    <p className="tag">{userData.tag}</p>
    <p className="location">{userData.location}l</p>
  </Description>
  <Stats>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{userData.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{userData.stats.followers}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{userData.stats.likes}</span>
    </li>
  </Stats>
</Card>

)

}