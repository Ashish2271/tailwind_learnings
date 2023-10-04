import React from 'react'
import {Testimonials,  Cards, LogoSlider,  BenefitsandFeatures,CountDownTimer, CtaSection, FaqSection, Footer, HeroSection,  ValueProposition, VisualContent, Blog } from './index.js'
import Nav from '../Components/Nav.js'




const Main = () => {




  return (
    <main >

    <Nav/>



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