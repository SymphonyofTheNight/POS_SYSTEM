import ReactDOM from 'react-dom/client';

//import global_state_manager - redux
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// import main component
import App from './App';

// import redux_store
import redux from './redux';

//create_redux_logger
const logger = createLogger();

const store = createStore(redux, compose(applyMiddleware(logger, thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

