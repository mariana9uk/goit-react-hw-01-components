
import {ListSt, FriendsSTList} from "./FriendList.styled";
import { FriendsListItem } from "./FriendsListItem";

export const FriendsList = ({friends }) => {
    const friendListItems = friends.map((friend) => (
      <ListSt  key={friend.id} >
      <FriendsListItem friend={friend} />
      </ListSt>
    ));
  
    return (
      <FriendsSTList>
        {friendListItems}
      </FriendsSTList>
    );
  };

