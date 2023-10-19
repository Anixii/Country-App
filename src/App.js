import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'; 
import Home from './pages/Home';
import Details from './pages/Details'
import NotFound from './pages/NotFound';
import { useState } from 'react';
function App() {
  const [countries,setCountries] = useState([])
  return (
    <> 
    <Header/> 
    <Main> 
      <Routes> 
        <Route path='/' element={<Home countries={countries} setCountries={setCountries}/>}> 
        </Route>
        <Route path='/country/:name' element={<Details/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
      
    </Main>
    </>
  );
}

export default App;
