import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//import global_state_manager - redux
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';

//localstorage
import storage from 'redux-persist/lib/storage';

// import main component
import App from './App';

// import redux_store
import redux from './redux';

//create_redux_logger
const logger = createLogger();


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, redux);

const store = createStore(persistedReducer, compose(applyMiddleware(logger, thunk)));
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);

