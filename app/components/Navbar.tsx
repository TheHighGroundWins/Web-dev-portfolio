import Link from 'next/link'
import React from 'react'
import LinksMenu from './LinksMenu'

const Navbar = () => {
  return (
  <div className='flex justify-center'>
  <nav className='fixed flex backdrop-blur-sm border-b text-[15px]
   border-[#40404787] bg-[#33415566] text-white rounded-full m-5 p-3 px-5'>
            <div className='flex space-x-10 items-center'>
              <h1>Juan's website</h1>
              <div className='flex items-center space-x-5'>
                    <Link href={"/"}>Home</Link>
                    <LinksMenu></LinksMenu>
                    <Link href={"/projects"}>Projects</Link>
                  </div>
              </div>
    </nav>
    </div>
  )
}

export default Navbar