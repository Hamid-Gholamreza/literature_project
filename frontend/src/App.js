import './App.css';
import LoginForm from '../src/components/auth/LoginForm';
import LogoutForm from '../src/components/auth/LogoutForm';
import RegistrationForm from '../src/components/auth/RegistrationForm';
import ForgetPassword from './components/auth/ForgetPassword';
import HomePage from './components/HomePage';
import Poem from './components/Poem';
import ListOfPoems from './components/ListOfPoems';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/register' Component={RegistrationForm}/>
            <Route path='/logout' Component={LogoutForm}/>
            <Route path='/login' Component={LoginForm}/>
            <Route path='/forget-password' Component={ForgetPassword} />
        </Routes>
        <Routes>
            <Route path='/poem/:id' Component={Poem}/>
            <Route path='/home' Component={HomePage} />
            <Route path='/list-of-poems' Component={ListOfPoems} />
        </Routes>
    </Router>
  );
}

export default App;