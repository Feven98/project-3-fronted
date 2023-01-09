import { Routes, Route } from "react-router-dom"
import Profile from '../pages/Profile'; 
// import SignUp from './components/SignUp';
import { Search } from './allcomponent/Search';
import User from '../pages/User';
import Post from "../pages/Post";

const Main = () => {
  return (
    <main>
      <Routes>
      <Route path='/' element={<User />} />
        <Route path='/profile/:id' element={ <Profile /> } />
        <Route path='/post' element={<Post />} />
        <Route path='/search/:id' element={<Search />} />

      </Routes>
    </main>
  )
}

export default Main
