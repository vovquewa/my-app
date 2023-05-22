import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux_store';
import { Provider } from './StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  );
  reportWebVitals();

}
rerenderEntireTree(store.getState());
store.subscribe(
  () => {
    let state = store.getState();
    rerenderEntireTree(state);
    // поскольку необходимо передавать в функцию rerenderEntireTree новый state, то необходимо вызывать getState() внутри функции subscribe
  }
);
export default rerenderEntireTree;



