import React from 'react';

import Button from "../Button";
import './App.css';


const App = () => {
  return <div className="App">
    <div className="top">4:43</div>
    <div className="display">0</div>
    <div className="buttons">
      <Button />
    </div>
    <div className="bottom">-</div>

  </div>
};

export default App;