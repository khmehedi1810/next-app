'use client'

import Menu from '@/navmenu/Menu'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  let router = useRouter()
  const Goto = () => {
    router.replace('/');
  }
  return (
    <div>
        <Menu/>
        <h1 className='headTitle'>This is About Page</h1>
        <button onClick={Goto}>Reload</button>
    </div>
  )
}

export default page