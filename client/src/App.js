import React from 'react';

// components
import Login from './components/Login/Login.jsx';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//scss
import './scss/_App.scss';

const App = () => {
  return (
    <div className='App col-lg-12 m-0 p-0'>
      <Login />
    </div>
  )
}

export default App;