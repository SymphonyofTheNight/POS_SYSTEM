import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actions 
import { get_db_from_api } from './controllers/actions.js';

// components
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

//checkout component
import Checkout from './components/Dashboard/DashboardComponents/Checkout/Checkout.jsx';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//scss
import './scss/_App.scss';

const App = () => {

  // call to call action thunks
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_db_from_api());
  }, [dispatch])

  return (
    <div className='App col-lg-12 m-0 p-0'>
      <Switch>
        <Route path='/' element={<><Login /></>} />
        <Route path='/Dashboard' element={<><Dashboard /></>} />
        <Route path='/Sales' element={<><Dashboard /></>} />
        <Route path='/Products' element={<><Dashboard /></>} />
        <Route path='/customer' element={<><Dashboard /></>} />
        <Route path='/Supplier' element={<><Dashboard /></>} />
        <Route path='/Report' element={<><Dashboard /></>} />
        <Route path='/Checkout' element={<><Checkout /></>} />
      </Switch>
    </div>
  )
}

export default App;