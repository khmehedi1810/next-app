"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const Menu = () => {
  let currentPath = usePathname();
  return (
    <div className="mainMenu">
          <Link className={currentPath == '/' ? 'active':''} href={'/'}>Home</Link>
          <Link className={currentPath == '/products' ? 'active':''} 
            href={{pathname:'/products', query: {name: 'KH Mehedi Hasan', age: 25}}}
          >Products</Link>
          <Link className={currentPath == '/about' ? 'active':''} href={'/about'}>About</Link>
          <Link className={currentPath == '/contact' ? 'active':''} href={'/contact'}>Contact</Link>

    </div>
  )
}

export default Menu