import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage"
import ProductsListPage from './pages/ProductsListPage';
import BookMarkPage from './pages/BookMarkPage';
import { useEffect, useState } from 'react';

import Header from './Header';
import Footer from './Footer';
function App() {
  const [productData, setProductData] = useState([]);
  const [query, setQuery] = useState([]);
    

  

  const getDatas = async () => {
    let query ='';
    await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?${query}`)
    .then((res)=> res.json())
    .then((data)=> setProductData(data))
  }

  useEffect(() => {
    getDatas();
  }, [query]);



  return (
    <div className="App">


      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage data={productData} setQuery={setQuery}/>}/>
        <Route path='/products/list' element= {<ProductsListPage data={productData} />} />
        <Route path='/bookmark' element= {<BookMarkPage/>} />
      </Routes>
     </Router>
     
    <Footer/>
    </div>
  );
}

export default App;
