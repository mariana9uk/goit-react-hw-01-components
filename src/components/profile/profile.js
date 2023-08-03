
import { Card, Description, Stats, StatsLiItem } from "./profile.styled"


export const Profile= ({userData})=>{
return (
  <Card>
  <Description>
    <img
      src={userData.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p>{userData.username}</p>
    <p>@{userData.tag}</p>
    <p>{userData.location}l</p>
  </Description>
  <Stats>
    <StatsLiItem>
      <span>Followers</span>
      <span>{userData.stats.followers}</span>
    </StatsLiItem>
    <StatsLiItem>
      <span>Views</span>
      <span>{userData.stats.followers}</span>
    </StatsLiItem>
    <StatsLiItem>
      <span>Likes</span>
      <span>{userData.stats.likes}</span>
    </StatsLiItem>
  </Stats>
</Card>

)

}