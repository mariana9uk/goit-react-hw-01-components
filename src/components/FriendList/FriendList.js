
import { StatusSpan, Avatar} from "./FriendList.styled";

const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
      <li >
  <StatusSpan  style={{ backgroundColor: isOnline ? "green" : "red" }} >{isOnline}</StatusSpan>
<Avatar src={avatar} alt="User avatar" width="48"></Avatar>
  <p>{name}</p>
</li>
    )
  };

export const FriendsList = ({items }) => {
    const friendListItems = items.map((friend) => (
      <FriendsListItem
      key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ));
  
    return (
      <ul>
        {friendListItems}
      </ul>
    );
  };

