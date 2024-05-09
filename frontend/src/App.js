import './App.css';
import LoginForm from '../src/components/auth/LoginForm';
import LogoutForm from '../src/components/auth/LogoutForm';
import RegistrationForm from '../src/components/auth/RegistrationForm';
import ForgetPassword from './components/auth/ForgetPassword';
import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';
import Poem from './components/Poem';

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
            <Route path='/poem' Component={Poem}/>
        </Routes>
    </Router>
  );
}

export default App;