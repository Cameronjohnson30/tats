import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import './App.css';
import { Gallery } from "./components/Gallery";
import { School } from "./components/School";
import { Skills } from "./components/Skills";
import { Shops } from "./components/Shops";
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
    <div className="App">
            <NavBar />
            <Home />
    </div>
    </React.Fragment>
  );
}

export default App;
