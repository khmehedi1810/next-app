import Menu from '@/navmenu/Menu'
import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <Menu />
        <h1>I m About Slug</h1>
        <p>My slug is: {params.slug}</p>
    </div>
  )
}

export default page