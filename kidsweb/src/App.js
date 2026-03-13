import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PuzzleGame from './pages/PuzzleGamePage';
import AuthPage from './pages/AuthPage';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function AppWrapper() {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== '/auth'; // hide on /auth only

  return (
    <>
      {showHeaderAndFooter && <HeaderComponent />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puzzle" element={<PuzzleGame />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>

      {showHeaderAndFooter && <FooterComponent />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
