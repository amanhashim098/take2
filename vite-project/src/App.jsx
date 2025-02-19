import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';
import ProductClick from './components/ProductClick';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/dashboard';
import Security from './components/Security';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/shop/:id' element={<ProductClick/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}> </Route>
          <Route path='/security' element={<Security/>}></Route>
        </Routes>
    </div>
  );  
};

export default App;
