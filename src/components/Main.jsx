import { Routes, Route } from "react-router-dom"

import User from '../pages/User';
import Post from "../pages/Post";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Show from "../pages/Show";
import Edit from "../pages/Edit";
import ProfilePage from "./allcomponent/Profile";
import ProfilePage from "../pages/profile/profile";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:id' element={<Show />} />
        <Route path='/post' element={<Post />} />
        <Route path='/user/:id/edit' element={<Edit/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
      </Routes>
    </main>
  )
}

export default Main
