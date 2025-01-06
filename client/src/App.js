import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'; // Updated imports
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {' '}
        {/* Replaced Switch with Routes */}
        <Route path="/" element={user ? <Home /> : <Register />} />{' '}
        {/* Updated Route usage */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />{' '}
        {/* Replaced Redirect with Navigate */}
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />{' '}
        {/* Replaced Redirect with Navigate */}
        <Route path="/profile/:username" element={<Profile />} />{' '}
        {/* Updated Route usage */}
      </Routes>
    </Router>
  );
}

export default App;
