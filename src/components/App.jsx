import user from '../user.json'
import { Profile } from "./profile/profile";
import statistic from '../data.json'
import{GlobalStyle} from './globalstyles'
import { Statistics } from './Statistics/Statistics';
export const App = () => {
  return (
  
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      
<Profile userData = {user}
/>
<GlobalStyle />
<Statistics statisticData = {statistic}/>

    </div>
  );
};
