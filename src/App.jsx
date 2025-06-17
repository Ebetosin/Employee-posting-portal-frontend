import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import NoMatch from './components/noMatch/NoMatch';
import Dashboard from './components/dashboard/Dashboard';
import PostUser from './components/employee/PostUser';
import UpdateUser from './components/employee/UpdateUser';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<PostUser />} />
        <Route path="/employee/:id" element={<UpdateUser />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default App
