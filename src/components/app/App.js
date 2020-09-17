import React, { useState } from 'react';
import beauty_products from '../../assets/beauty-products.jpg';
import Product from '../product/Product.js'
import { api } from '../../services/api'
import '../../style/App.css';

function App() {
  const [result, setResult] = useState(null);
  const [query, setQuery] = useState("")

  let search = () => {
    api.search(query)
      .then(res => {
        setResult(res);
      }).catch(err => {
        alert("Impossible to retrieve data from the server \nPlease check your internet conection and try again")
        console.log(err);
      })
  }

  let resultDisplay = () => {
    if (result == null) {
      return <div></div>
    } else if (result.length === 0) {
      return <div style={{ color: 'white' }}>No result found</div>
    } else {
      let products = result.map((product) => { return <Product key={product.id} product={product} ></Product> });
      return <div>{products}</div>
    }
  }


  return (
    <div className="App">
      <div className="row">
        <div className="header-section col-sm" id="page-title" ><p>This is a page for<br />beauty product search</p></div>
        <div className="header-section col-sm" id="illustration"><img alt="hand picking a beauty product" src={beauty_products} ></img></div>
      </div>
      <div className="" id="search-section" >
        <div className="row">
          <input data-testid="search-input" value={query} className="form-control col-8" type="text" onChange={(e) => { setQuery(e.target.value) }} ></input>
          <div className="col-4"><button onClick={() => { search() }} className="btn">Search</button></div>
        </div>
        {resultDisplay()}
      </div>
    </div>
  );
}

export default App;
