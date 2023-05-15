import './App.css';
import { useEffect, useState } from 'react';
import TypeComponent from './TypeComponent';

function App() {
  const [datas , setdatas] = useState([]);

  const getDatas = async () => {
    await fetch("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res)=> res.json())
    .then((data)=> setdatas(data))
  }

  useEffect(() => {
    getDatas();
  },[])

  return (
    <div className="App">
     <TypeComponent datas={datas}></TypeComponent>
    </div>
  );
}

export default App;
