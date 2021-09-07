import React from "react";
import Weather from "./component/Weather";
import Header from "./component/Header";
import "./app.css";
import { MyProvider } from "./context/MyContext";


const App = () => {
  return (
    <MyProvider>
      <div className="app">
        <Header />
        <Weather />
      </div>
    </MyProvider>
  );
};

export default App;
