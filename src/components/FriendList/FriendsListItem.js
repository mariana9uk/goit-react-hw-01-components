import { StatusSpan, Avatar, DivSt } from './FriendList.styled';
export const FriendsListItem = ({ friend }) => {
  return (
    <DivSt>
      <StatusSpan status={friend.isOnline.toString()}>
        {friend.isOnline}
      </StatusSpan>
      <Avatar src={friend.avatar} alt="User avatar" width="48"></Avatar>
      <p>{friend.name}</p>
    </DivSt>
  );
};
