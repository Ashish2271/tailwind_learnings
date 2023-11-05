import React from 'react'
import Nav01 from '../Components/Nav01'
import { Blog, Footer } from '../sections_landing'

const BlogPage = () => {
  return (
    <div>

<Nav01/>
<div className="bg-sky-950 h-[90px] w-screen"></div>
<Blog/>

<Footer/>


    </div>
  )
}

export default BlogPage