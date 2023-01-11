import { Routes, Route } from "react-router-dom"

import Home from '../pages/Home';
import Post from "../pages/Post";
// import Home from "../pages/Login";
import Auth from "../pages/Auth";
import Show from "../pages/Show";
// import Edit from "../pages/Edit";
import EditImage from "../pages/EditImage";
import ProfilePage from "./allcomponent/Profile";
import Showimage from "../pages/Showimage";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        {/* <Route path='/user' element={<User />} /> */}
        {/* <Route path='/post/:id' element={<Show />} /> */}
        <Route path='/post' element={<Post />} />
        <Route path='/post/:id/edit' element={<EditImage/>}/>
        <Route path='/post/:id' element={<Showimage/>}/>
      </Routes>
    </main>
  )
}

export default Main
