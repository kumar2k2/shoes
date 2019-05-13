import React from 'react';
import {Provider} from "react-redux";
import './assets/css/App.css';

//external
import store from "./Store";
import Product from "./components/Product";
function App() {
  return (
    <Provider store={store}>
     <div className="App">
        <h1>Online Store</h1>
        <Product />
     </div>
    </Provider>
  );
}

export default App;
