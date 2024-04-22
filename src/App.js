import './App.css';
import Authentication from './components/authentication';
import LandingPage from './components/landingPage';
import Choice from './components/home';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SignInComponent from './components/signin';
import SignUpComponent from './components/signup';
function App() {
  return (
    <div className="App">
      {/* <Authentication/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/ReactProject" element={<Authentication />} />
        <Route path="/" element={<Authentication />} />
        <Route path="/TurfReact" element={<Authentication />} />
          <Route path="/ReactLogin" element={<Authentication />} />
          {/* <Route path="/landingPage" element={<LandingPage />} /> */}
          <Route path="/home" element={<Choice />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
