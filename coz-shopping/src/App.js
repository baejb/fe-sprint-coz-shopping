import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage"
import ProductsListPage from './pages/ProductsListPage';
import BookMarkPage from './pages/BookMarkPage';
import { useEffect, useState } from 'react';
import TypeComponent from './TypeComponent';
import { initData } from './dummy';
import Header from './Header';

function App() {
  const [data, setdata] = useState([]);
  const [ex , setex] = useState(initData)
    

  const getDatas = async () => {
    let query ='';
    await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?${query}`)
    .then((res)=> res.json())
    .then((data)=> setdata(data))
  }

  useEffect(() => {
    getDatas();
  },[])

  return (
    <div className="App">


      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/products/list' element= {<ProductsListPage/>}/>
        <Route path='/bookmark' element= {<BookMarkPage/>} />
      </Routes>
     </Router>
     

    </div>
  );
}

export default App;
