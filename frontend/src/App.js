import './App.css';
import LoginForm from '../src/components/auth/LoginForm';
import LogoutForm from '../src/components/auth/LogoutForm';
import RegistrationForm from '../src/components/auth/RegistrationForm';
import ForgetPassword from './components/auth/ForgetPassword';
import SearchPoem from './components/SearchPoem';
import HomePage from './components/HomePage';
import Poem from './components/Poem';
import ListOfPoems from './components/ListOfPoems';
import ListOfAudios from './components/ListOfAudios';
import NotFound404 from './components/NotFound404';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
              <Route path='/register' Component={RegistrationForm}/>
              <Route path='/404' Component={NotFound404} />
              <Route path='/logout' Component={LogoutForm}/>
              <Route path='/login' Component={LoginForm}/>
              <Route path='/forget-password' Component={ForgetPassword} />
        </Routes>
        <Routes>
            <Route path='/poem/:id' Component={Poem}/>
            <Route path='/home' Component={HomePage} />
            <Route path='/list-of-poems' Component={ListOfPoems} />
            <Route path='/list-of-audios' Component={ListOfAudios} />
            <Route path='/search-poem' Component={SearchPoem} />
        </Routes>
    </Router>
  );
}

export default App;