import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Shop from './components/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
