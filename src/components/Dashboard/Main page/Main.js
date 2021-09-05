import MainMenu from './MainMenu/MainMenu.js';
import Feed from './Feed/Feed.js';
import OnlineFriendList from './Online FriendList/OnlineFriendList.js';

import './Main.css';

const Main = () => {
    return ( 
        <div className="main">
            <MainMenu />
            <Feed />
            <OnlineFriendList />
        </div>
     );
}
 
export default Main;