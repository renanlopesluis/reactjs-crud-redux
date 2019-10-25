import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AppRouting from './App.routing.js';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouting/>
      </Provider>
    </div>
  );
}

export default App;
