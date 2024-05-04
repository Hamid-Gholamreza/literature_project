import './App.css';
import LoginForm from '../src/components/auth/LoginForm';
import LogoutForm from '../src/components/auth/LogoutForm';
import RegistrationForm from '../src/components/auth/RegistrationForm';
import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/register' Component={RegistrationForm}/>
            <Route path='/logout' Component={LogoutForm}/>
            <Route path='/login' Component={LoginForm}/>
        </Routes>
    </Router>
  );
}

export default App;