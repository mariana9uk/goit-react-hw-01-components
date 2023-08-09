import user from '../user.json'
import { Profile } from "./profile/profile";
import statistic from '../data.json'
import{GlobalStyle} from './globalstyles'
import { Statistics } from './Statistics/Statistics';
import friends from '../friends.json'
import { FriendsList } from './FriendList/FriendList';
import transactions from '../transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
  
    <div
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 30
      }}
    >
      
<Profile userData = {user}
/>
<GlobalStyle />
<Statistics statisticData = {statistic}/>
<FriendsList friends = {friends}/>
<TransactionHistory  items={transactions}/>
    </div>
  );
};
