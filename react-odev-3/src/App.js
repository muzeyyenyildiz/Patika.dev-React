import React from "react";
import HavaDurumu from "./component/HavaDurumu";
import Header from "./component/Header";
import './app.css';
import { MyProvider } from "./context/MyContext";


//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  return (
    <MyProvider>
      <div className="app">
        <Header />
        <HavaDurumu/>
      </div>
    </MyProvider>  
  );
};

export default App;
