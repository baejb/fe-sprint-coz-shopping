import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage"
import ProductsListPage from './pages/ProductsListPage';
import BookMarkPage from './pages/BookMarkPage';
import { useEffect, useState } from 'react';
import TypeComponent from './TypeComponent';
import { initData } from './dummy';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [data, setdata] = useState([]);
  const [ex , setex] = useState(initData)
  const [query, setquery] = useState('');
    

  const setQueryInParent = (queryValue) => {
    setquery(queryValue);
  };

  const getDatas = async () => {
    try {
      const response = await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?${query}`);
      const responseData = await response.json();
      setdata(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDatas();
  }, [query]);



  return (
    <div className="App">


      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage data={data} setQuery={setQueryInParent}/>}/>
        <Route path='/products/list' element= {<ProductsListPage/>}/>
        <Route path='/bookmark' element= {<BookMarkPage/>} />
      </Routes>
     </Router>
     <Footer/>

    </div>
  );
}

export default App;
