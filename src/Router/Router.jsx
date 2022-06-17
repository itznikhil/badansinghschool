import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/home/Home'
import { About } from '../Pages/about/About'
import { Login } from '../Pages/login/Login'
import { Admission } from '../Pages/admission/Admission'
import { ErrorPage } from '../Pages/errorpage/ErrorPage'
import { StaffDetails } from '../Pages/staffDetails/StaffDetails'
import { Exams } from '../Pages/exams/Exams'
import { Enquire } from '../Pages/enquire/Enquire'
import { ProtectedRoutes } from '../auth/ProtectedRoutes'
import { Dashboard } from '../Pages/dashboard'

export const Router = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admission' element={<Admission/>}/>
        <Route path='/staffdetails' element={<StaffDetails/>}/>
        <Route path='/exams' element={<Exams/>}/>
        <Route path='/contact' element={<Enquire/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}
