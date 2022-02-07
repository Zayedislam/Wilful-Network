import React, { createContext, useState } from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import AddEvent from './Components/AddEvent/AddEvent';
import Admin from './Components/Admin/Admin';
//import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import BodyArea from './Components/BodyArea/BodyArea';
import Donation from './Components/Donation/Donation';
import Login from './Components/Login/Login';
//import NotFound from './Components/NotFound/NotFound';
import RegEvent from './Components/RegEvent/RegEvent';


export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
    name : '',
    email : '',
    date: '',
    description:'',
    img:''
});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
        <Route path="/">
          <BodyArea/>
        </Route>
        <Route path="/home" element={<BodyArea />}/>
        <Route path="/RegEvent" element={<RegEvent />}/>
        <Route path="/register" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/events" element={<RegEvent />}/>
        <Route path="/donation" element={<Donation />}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/addevent" element={<AddEvent/>}/>


        </Routes>
      </BrowserRouter>

    </UserContext.Provider>
      
    
  );
}

export default App;
