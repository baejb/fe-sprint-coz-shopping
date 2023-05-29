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
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const toggleBookmark = (item) => {
    const index = bookmarkedItems.findIndex((bookmark) => bookmark.id === item.id);
    if (index !== -1) {
      const updatedBookmarks = [...bookmarkedItems];
      updatedBookmarks.splice(index, 1);
      setBookmarkedItems(updatedBookmarks);
    } else {
      const updatedBookmarks = [...bookmarkedItems, item];
      setBookmarkedItems(updatedBookmarks);
    }
  };
  

  const getDatas = async () => {
  
    await fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
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
        <Route path='/' element={<MainPage data={productData} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems} toggleBookmark={toggleBookmark}/>}/>
        <Route path='/products/list' element= {<ProductsListPage data={productData} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems} toggleBookmark={toggleBookmark}/>} />
        <Route path='/bookmark' element= {<BookMarkPage data={productData} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems} toggleBookmark={toggleBookmark}/>} />
      </Routes>
     </Router>
     
    <Footer/>
    </div>
  );
}

export default App;
