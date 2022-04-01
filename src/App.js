import React from 'react';
import Routes from './routes'
import './style.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <div className='app'>
      <Routes/>
      <ToastContainer autoClose={2000}/>
    </div>

  
  );
}

export default App;
