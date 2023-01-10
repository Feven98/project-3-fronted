import { Routes, Route } from "react-router-dom"

import User from '../pages/User';
import Post from "../pages/Post";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Show from "../pages/Show";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<Show />} />
        <Route path='/post' element={<Post />} />
        {/* <Route path='/profile' element={ <ProfilePage /> } /> */}
      </Routes>
    </main>
  )
}

export default Main
