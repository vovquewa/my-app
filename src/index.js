import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)} // bind - привязка контекста к функции (привязка store к dispatch)
        store={store}
      />
    </React.StrictMode>
  );
  reportWebVitals();

}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
export default rerenderEntireTree;



