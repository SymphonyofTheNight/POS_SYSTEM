import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// actions 
import { get_db_from_api } from './controllers/actions.js';

// components
import Login from './components/Login/Login.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

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
        <Route path='/dashboard' element={<><Dashboard /></>} />
        <Route path='/dashboard/sales' element={<><Dashboard /></>} />
        <Route path='/dashboard/products' element={<><Dashboard /></>} />
        <Route path='/dashboard/customer' element={<><Dashboard /></>} />
        <Route path='/dashboard/supplier' element={<><Dashboard /></>} />
        <Route path='/dashboard/report' element={<><Dashboard /></>} />
      </Switch>
    </div>
  )
}

export default App;