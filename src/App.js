import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
function App() {
  return (
    <div className="App">
      <HeroSection style={{height:"400px"}} />
    </div>
  );
}

export default App;
