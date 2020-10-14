import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddOrder from './components/Dashboard/AddOrder/AddOrder';
import AddReview from './components/Dashboard/AddReview/AddReview';
import Admin from './components/Admin/Admin/Admin';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AddService from './components/Admin/AddService/AddService';
import AllService from './components/Admin/AllService/AllService';
import OurTeam from './components/Home/OurTeam/OurTeam';
import OurPortfolio from './components/Home/OurPortfolio/OurPortfolio';
import ContactUs from './components/Home/ContactUs/ContactUs';
import NotFound from './components/Home/NotFound/NotFound';
import AdminList from './components/Admin/AdminList/AdminList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddFakeData from './components/Dashboard/AddFakeData/AddFakeData';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Router path="/login">
            <Login></Login>
          </Router>
          <PrivateRoute path="/dashboard">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <Route path="/addOrder">
            <AddOrder></AddOrder>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/admin">
            <AllService></AllService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/allService">
            <AllService></AllService>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/ourTeam">
            <OurTeam></OurTeam>
          </Route>
          <Route path="/ourPortfolio">
            <OurPortfolio></OurPortfolio>
          </Route>
          <Route path="/adminList">
            <AdminList></AdminList>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
