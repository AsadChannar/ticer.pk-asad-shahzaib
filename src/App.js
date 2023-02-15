import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
<<<<<<< HEAD
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
function App() {
  return (
    <div className="App">
      <HeroSection style={{height:"400px"}} />
=======

import './App.css';

import Navebar from './components/Navigation/Navebar'
function App() {
  return (
    <div className="App" style={{backgroundImage:"url('./a.jpg')"}}>
      <Navebar/>
>>>>>>> abc3b7e1b032b810cccbcc1331e35938933b45f0
    </div>
  );
}

export default App;
