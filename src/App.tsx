import React, { useState, useEffect } from 'react';
import Demo2103 from './components/demo2103';
import Test1 from './components/demo1104';
import LoginComponent from './components/demo2803';
function App() {
  return (
    <div>
      {localStorage.getItem('userName')=='admin'?
        <Demo2103 /> : <LoginComponent />
      }
    </div>
  );
}

export default App;
