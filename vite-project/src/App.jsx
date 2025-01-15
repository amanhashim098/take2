import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Shop from './components/Shop';
import { Routes, Route } from 'react-router-dom';
import ProductClick from './components/ProductClick';

const App = () => {
  return (
    <div className="flex flex-col h-screen">
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/shop/:id' element={<ProductClick/>}></Route>
        </Routes>
    </div>
  );  
};

export default App;
