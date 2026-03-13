import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PuzzleGame from './pages/PuzzleGamePage';
import AuthPage from './pages/AuthPage';
import HeaderComponent from './components/HeaderComponent';

function AppWrapper() {
  const location = useLocation();
  const showHeader = location.pathname !== '/auth'; // hide on /auth only

  return (
    <>
      {showHeader && <HeaderComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/puzzle" element={<PuzzleGame />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
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
