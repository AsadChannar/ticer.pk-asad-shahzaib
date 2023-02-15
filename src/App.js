import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Navbar from './Components/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
    </div>
  );
}

export default App;
