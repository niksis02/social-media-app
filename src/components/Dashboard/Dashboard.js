import { useHistory } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile.js';
import Main from './Main page/Main';
import Error404 from '../Error404.js/Error404';

import './Dashboard.css';

const Dashboard = () => {
    let history = useHistory();

    const token = localStorage.getItem('token');
    if(!token){
        history.push('/login');
        return null;
    } 
    else {
        return ( 
            <div className="dashBoard">
                <Navbar />
                <Switch>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/" component={Main} />
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
}
 
export default Dashboard;