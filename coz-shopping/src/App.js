import logo from './logo.svg';
import './App.css';


   
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage"
import ProductsListPage from './pages/ProductsListPage';
import BookMarkPage from './pages/BookMarkPage';
import Header from './Header';
import Footer from './Footer';
function App() {
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
     <Footer/>

    </div>
  );
}

export default App;
