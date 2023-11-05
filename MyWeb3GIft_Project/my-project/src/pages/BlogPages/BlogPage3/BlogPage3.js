import React from 'react'
import "./BlogPage3.css"
// import { Link } from 'react-router-dom'
import Nav01 from '../../../Components/Nav01'
import { Footer } from '../../../sections_landing'
import Blog3 from './Blog3'

const BlogPage3 = () => {
  return (
    <div>


<Nav01></Nav01> 
       <div className="bg-sky-950 h-[90px] w-screen"></div>
<Blog3/>
<Footer></Footer>


    </div>
  )
}

export default BlogPage3