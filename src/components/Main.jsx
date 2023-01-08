import { Routes, Route } from "react-router-dom"
import HomePage from './allcomponent/Home';
import ProfilePage from './allcomponent/Profile'; 
// import SignUp from './components/SignUp';
import { Search } from './allcomponent/Search';

const Main = () => {
  return (
    <main>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/user' element={ <ProfilePage /> } />
        {/* <Route path='/testing' element={<SignUp />} /> */}
        <Route path='/user/:id' element={<Search />} />
      </Routes>
    </main>
  )
}

export default Main
