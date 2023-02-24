import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import './App.css';
import { Gallery } from "./components/Gallery";
import { School } from "./components/School";
import { Skills } from "./components/Skills";

function App() {
  return (
    <React.Fragment>
    <div className="App">
            <NavBar />
            <Gallery />
            <School />
    </div>
    </React.Fragment>
  );
}

export default App;
