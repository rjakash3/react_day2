import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Ragistration from './components/Ragistration';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Ragistration/>}/>
      </Routes>
      {/* <Login/> */}
      {/* <Ragistration/> */}
    </div>
  );
}

export default App;
