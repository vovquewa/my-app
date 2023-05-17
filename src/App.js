import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

const App = (props) => {
  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path='/dialogs'
              element={<Dialogs
                store={props.store}
              />} />
            <Route
              path={'/dialogs/:id'}
              element={<Dialogs
                store={props.store}
              />} />
            <Route
              path='/profile'
              element={<Profile
                state={props.state.profilePage}
                dispatch={props.dispatch}
              />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}




export default App;
