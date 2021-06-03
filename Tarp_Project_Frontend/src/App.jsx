import React ,{useState,useMemo }from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/navbar';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Recommend from './components/pages/Recommend';
import Thanks from './components/pages/thanks';
import Search from './components/Search/components/Search';
import UserList from './components/UserList/components/UserList';
import Profile from './components/Profile/components/Profile';
import SignUpHelper from './components/pages/SignUpHelper';
import SignInHelper from './components/pages/SignInHelper';
import {UserContext} from './userContext';

function App() {
  console.log("helloo baby ");
 const [userDetails,setUserDetail] = useState(null)
 const value = useMemo(() => ({ userDetails,setUserDetail }), [userDetails,setUserDetail]);
  return (                       
    <>
      <Router>
        <Switch>
          <Route path='/thanks' component = {Thanks} />
          <Route path='/sign-up-helper' component = {SignUpHelper} />
          <Route path='/sign-in-helper' component = {SignInHelper} />
          <div>
          <UserContext.Provider value = {value}>
            <Navbar userDetails = {userDetails} />
            <Route path='/services' componhent={Services} />
            <Route path='/products' component={Products} />
            <Route path='/home' component={Home} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/recommend' component = {Recommend} />
            <Route path='/search' component = {Search} />
            <Route path='/userlist' component = {UserList} />
            <Route path='/profile'  component = {Profile} />
            <Route path='/sign-in' component = {SignIn} />
            <Route path='/' exact component={SignIn} />
            {/* <Route path='/user/:id' component={} /> */}
          </UserContext.Provider>
          </div> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
