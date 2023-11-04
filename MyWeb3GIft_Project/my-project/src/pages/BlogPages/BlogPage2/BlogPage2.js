import React from 'react'
import "./BlogPage2.css"
import Nav01 from '../../../Components/Nav01'
import { Footer } from '../../../sections_landing'
import Blog2 from "./Blog2"

const BlogPage2 = () => {
  return (
    <div>


<Nav01></Nav01> 
       <div className="bg-sky-950 h-[90px] w-screen"></div>
<Blog2/>
<Footer></Footer>


    </div>
  )
}

export default BlogPage2