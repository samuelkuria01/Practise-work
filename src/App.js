import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar';
import About from './About';
import Category from './category';
import OrderSum from './OrderSum';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='category' element={<Category />}></Route>
        <Route path='Ordersum' element={<OrderSum />}></Route>
        <Route path='products' element={<Products />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
