import logo from './logo.svg';
import './App.css';
import UserRegister from './components/UserRegister'
import ListGet from './components/Listget'
import ListPost from './components/ListPost'
import Login from './components/Login'
import LogOut from './components/LogOut'
import Header from './navbar'
import { useState } from 'react';
import {Router,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

 function App(){
  return (
<div>
 {/* <Router>
<Routes>
<Route exact path='/list' element={<ListPost/>}/>
</Routes>
  </Router> */}
  <Header/>
  <UserRegister/>
<ListPost/>
</div>
  );
 }
 export default App

