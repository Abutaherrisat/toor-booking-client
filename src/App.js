
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Service from './components/Service/Service';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login'
import Myorder from './components/MyOrder/Myorder'
import Manageorder from './components/ManageOrder/Manageorder'
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AuthProvider from './context/AuthProvider';
import Register from './components/Register/Register';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/myorder">
              <Myorder></Myorder>
            </PrivateRoute>
            <PrivateRoute path="/manageservice">
              <Manageorder></Manageorder>
            </PrivateRoute>
            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
