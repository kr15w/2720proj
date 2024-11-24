import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom';

import Login from "./pages/Login.js"
import UserMain from './pages/UserMain.js';
import AdminMain from './pages/AdminMain.js';

function App() {
  return (
    <>
      <header>
        Static stuff that doesnt need to update
      </header>
      <hr></hr>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<UserMain />}/>
        <Route path="/admin" element={<AdminMain/>}/>
      </Routes>
      </BrowserRouter>
    </>
    );
}

function Home() {
  const navi = useNavigate();
  // im thinking this should be changed to redirect instead based on session
  // feel free to change it to whatever u think
  //https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
  return (
    <>
    <h1>Temporary home page?</h1>
    <p>how to prevent user from going to admin by editing the link</p>
    <button onClick={()=>navi("/login")}>Direct to login page</button>
    <button onClick={()=>navi("/user")}>Direct to user page</button>
    <button onClick={()=>navi("/admin")}>Direct to admin page</button>
    </>
  )
}
export default App;
