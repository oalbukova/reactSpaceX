import React from "react";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main"
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header/>
        <Main />
      </div>

      <Footer/>

    </div>
  );
}

export default App;
