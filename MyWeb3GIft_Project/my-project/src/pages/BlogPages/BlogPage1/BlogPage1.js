import React from 'react'
import "./BlogPage1.css"
import Blog1 from './Blog1'

import Nav01 from '../../../Components/Nav01'
import { Footer } from '../../../sections_landing'

const BlogPage1 = () => {
  return (
    <div>
       <Nav01></Nav01> 
       <div className="bg-sky-950 h-[90px] w-screen"></div>
<Blog1></Blog1>
<Footer></Footer>
    </div>
  )
}

export default BlogPage1