import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import DoctorDetails from './Pages/Doctors/DoctorDetails/DoctorDetails';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

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
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/doctor/:id">
              <DoctorDetails></DoctorDetails>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute exact path="/contact">
              <ContactUs></ContactUs>
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
