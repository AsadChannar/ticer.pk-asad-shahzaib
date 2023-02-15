import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './App.css';

import Navebar from './components/Navigation/Navebar'
function App() {
  return (
    <div className="App" style={{backgroundImage:"url('./a.jpg')"}}>
      <Navebar/>
    </div>
  );
}

export default App;
