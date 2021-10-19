import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pages from './components/Pages/Pages';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/About/About';
import Login from './components/Login/Login';
import Details from './components/Details/Details/Details';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Doctors from './components/Doctor/Doctors';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Pages></Pages>
            </Route>
            <Route path="/home">
              <Pages></Pages>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/details/:servicesId">
              <Details></Details>
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
