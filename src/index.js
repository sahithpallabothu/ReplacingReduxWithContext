import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
//import ProducstProvider from './context/products-context'; --context api
import './index.css';
import App from './App';
import configureStore from './hooks-store/products-store';
//import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

configureStore();

ReactDOM.render(
  // <Provider store={store}>
  //<ProducstProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</ProducstProvider>    
  //</Provider>
  ,
  document.getElementById('root')
);
