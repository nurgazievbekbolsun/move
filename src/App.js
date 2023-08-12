import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Popular from './components/popular';
import Toprated from './components/toprated';

function App() {
  return (
    <div className="App"> 
     <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={"/popular"} element={<Popular/>}/>
        <Route path={"/toprated"} element={<Toprated/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
