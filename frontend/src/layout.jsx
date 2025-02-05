import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header.jsx'

export default function Layout() {
  return (<>
    
          
          <Header/>
      
          <Outlet/>
        
      
   
    </>
  )
}
