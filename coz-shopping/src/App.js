import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [datas , setdatas] = useState([]);

  useEffect(() => {
    fetch("http://cozshopping.codestates-seb.link/api/v1/products")
    .then((res) => res.json())
    .then((data) => setdatas(data))
  },[])

  return (
    <div className="App">
     {console.log(datas[0].title)}
    </div>
  );
}

export default App;
