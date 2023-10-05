import React from 'react'
import {Testimonials,  Cards, LogoSlider, TextAnimation ,  BenefitsandFeatures,CountDownTimer, CtaSection, FaqSection, Footer, HeroSection,  ValueProposition, VisualContent, Blog } from './index.js'
// import Nav from '../Components/Nav.js'
import Nav01 from '../Components/Nav01.js'




const Main = () => {




  return (
    <main >

    <Nav01/>



<section>
< HeroSection />
</section>



<section>
<BenefitsandFeatures/>
</section>

{/* <section>
<SocialProof/>
</section> */}





<section>
  <Cards/>
</section>


<section>
<VisualContent/>
</section>

{/* <section>
<Testimonial_slider/>
</section> */}



<section>
  <LogoSlider/>
</section>


<section>
<ValueProposition/>
</section>




{/* <section>
<ContactInformation/>
</section>

<section>
<TrustSymbols/>
</section> */}


<section>
  <Testimonials/>
</section>


<section  className=' flex justify-center' >
  <Blog/>
</section>


<section>
<FaqSection/>
</section>

<section>
<CtaSection/>
</section>


<section>
<CountDownTimer/>
</section>


{/* <section className='max-md:hidden md:scale-50 dark:bg-gray-800 rounded-full dark:text-white'>
  <TextAnimation/>
</section> */}

{/* <section>
<ExitIntendPopup/>
</section>



<section>
<LeadCaptureForm/>
</section> */}

<section>
<Footer/>
</section>




    </main>
  )
}

export default Main