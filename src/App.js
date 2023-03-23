import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AddMoreTask from './Components/AddMoreTask';
import HeaderComponent from './Components/Header/HeaderComponent';

function App() {
  console.log("ssssss");
  return (

    <BrowserRouter>
    <HeaderComponent/>
       {/* <AddMoreTask  />  */}
    </BrowserRouter>

  );
}

export default React.memo(App);
