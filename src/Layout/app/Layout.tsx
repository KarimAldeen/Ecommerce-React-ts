import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from './Footer'


const Layout = ({ children ,className = "Layout_Body" }: { children: React.ReactNode ,className?: string }) => {

  return (
 <div className='Layout'>
     <NavBar/>
    <main className={className}>
        {children}
    </main>
    <Footer/>
 </div>
  )
}

export default Layout