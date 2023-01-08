import React from 'react';
import Main from '../Main';
import './App.css';
import Header from '../Header/Header';
// import HomePage from '../allcomponent/Home';
// import {Routes , Route} from 'react-router-dom'
// import ProfilePage from '../allcomponent/Profile'; 
// // import SignUp from './components/SignUp';
// import { Search } from '../allcomponent/Search';


function App() {
  return (
    <div className="App">

<Header/>
<Main/>
      {/* <div className='nav'>
      <h1>
      <a href="/">Home</a>
      </h1>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:id' element={ <ProfilePage /> } />
        {/* <Route path='/testing' element={<SignUp />} /> */}
        {/* <Route path='/form' element={<Search />} />
      </Routes> */} 
    </div>
  );
}

export default App;
