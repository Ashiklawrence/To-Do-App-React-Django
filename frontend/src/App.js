import './App.css';
import Navbar from './Components/Navbar'
import Details from './Components/Details';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Details/>} path='details/'/>
        </Routes>
    </div>
  );
}

export default App;
