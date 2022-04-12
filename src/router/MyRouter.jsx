import React from 'react'

import { Routes,Route } from 'react-router-dom'

import Pomodoro from './../page/pomodoro/Pomodoro';

import Login from './../page/login/Login';

import Register from './../page/register/Register';

import Todo from './../page/todo/Todo';

import Setting from './../page/setting/Setting';

import Analytics from './../page/analytic/Analytics';

const MyRouter = () => {
  return (
    <div className="w-full h-full  mr-[20px] rounded-2xl bg-white neu-shadow  p-2">
      <Routes>
        <Route index element={<Pomodoro/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="list" element={<Todo/>}/>
        <Route path="setting" element={<Setting/>}/>
        <Route path="analytics" element={<Analytics/>}/>
      </Routes>
    </div>
  )
}

export default MyRouter