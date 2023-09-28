import Button from "../components/Button"
import { arrowRight } from "../assets/icons"


const Hero = () => {
  return (

    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center border-2 border-red-500 p-2 gap-10 min-h-screen max-container ">

<div className="relative xl:w-2/5n flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">

<p>Our Summer Collection</p>
<h1>
    <span>The New Arrival</span>

<br />
<span>Nike</span>
<span>Shoes</span>
</h1>

<p>Discover Stylish Nike Arrivals, Quality Comfort, and innovation for your active life</p>

<Button 
label="Shop Now"
iconURL={arrowRight}
/>

<div className="flex justify-start flex-wrap items-start w-full mt-20 gap-16">

</div>

</div>

    </section>
  )
}

export default Hero