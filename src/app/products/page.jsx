'use client'

import Menu from '@/navmenu/Menu'
import React from 'react'

async function getData() {
  let res = await fetch('https://dummyjson.com/products')
  let data = await res.json();

  return data
}

const page = async() => {
  // let params = useSearchParams();
  // console.log(params.get('name'))
  // console.log(params.get('age'))
  let data = await getData()
  console.log(data)
  return (
    <div>
        <Menu/>
        <h1 className='headTitle'>This is Product Page</h1>
        {data.products && data.products.map(item => (
           <p>{item.title}</p>
        ))}
    </div>
  )
}

export default page