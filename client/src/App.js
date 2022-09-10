import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions 
import { get_db_from_api } from './controllers/actions.js';

// components
import Login from './components/Login/Login.jsx';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//scss
import './scss/_App.scss';

const App = () => {

  // call to call action thunks
  const dispatch = useDispatch();

  const getdata = useSelector(state => state.reducer.store);

  console.log(getdata);

  useEffect(() => {
    dispatch(get_db_from_api());
  }, [dispatch])

  return (
    <div className='App col-lg-12 m-0 p-0'>
      <Login />
    </div>
  )
}

export default App;