import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader.jsx'

export default function AdminLayout() {
  return (<>
    
          
          <AdminHeader/>
      
          <Outlet/>
        
      
   
    </>
  )
}