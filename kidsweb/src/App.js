import './App.css';
import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import SubjectsComponent from './components/SubjectsComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <HeroComponent />
        <SubjectsComponent/>
        <Routes>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
