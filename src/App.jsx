import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/login') return <Login />;
  if (path === '/register') return <Register />;
  return <Home />;
}
