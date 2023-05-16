import './App.css';
import { useEffect, useState } from 'react';
import TypeComponent from './TypeComponent';
import { initData } from './dummy';

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
     <TypeComponent data={data} ex={ex}></TypeComponent>
    
    </div>
  );
}

export default App;
