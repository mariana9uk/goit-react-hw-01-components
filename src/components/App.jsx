import user from '../user.json'
import { Profile } from "./profile/profile";
import{GlobalStyle} from './globalstyles'
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
        <GlobalStyle />
<Profile userData = {user}
/>

    </div>
  );
};
