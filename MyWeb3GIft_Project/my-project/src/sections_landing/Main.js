import React from 'react';
import {Testimonials,  LogoSlider, VideoUSP, EmailForm, TrustSymbols, GiftDetails, CountDownTimer,  FaqSection, Footer, HeroSection,    Blog, IconsDetails, WhoForSection, Steps } from './index.js'
// import Nav from '../Components/Nav.js' 
import Nav01 from '../Components/Nav01.js'

const Main = () => {


  return (
    <main className='  ' >

    <Nav01/>

<section>
< HeroSection />
</section>




<section>
  <IconsDetails/>
</section>


<section>
  <WhoForSection/>
</section>



<section>
  <VideoUSP/>
</section>










<section>
  <GiftDetails/>
</section>










{/* <section>
<BenefitsandFeatures/>
</section> */}

{/* <section>
<SocialProof/>
</section> */}





{/* <section>
  <Cards/>
</section> */}


{/* <section>
<VisualContent/>
</section> */}

{/* <section>
<Testimonial_slider/>
</section> */}


<section>
  <Steps/>
</section>







{/* <section>
<ContactInformation/>
</section> */}

<section>
<TrustSymbols/>
</section>


<section>
  <Testimonials/>
</section>


<section>
  <LogoSlider/>
</section>






{/* <section>
<ValueProposition/>
</section> */}

<section>
<CountDownTimer/>
</section>

<section  className=' flex justify-center' >
  <Blog/>
</section>


<section>
<FaqSection/>
</section>

{/* <section>
<CtaSection/>
</section> */}









{/* <section>
<ExitIntendPopup/>
</section>



<section>
<LeadCaptureForm/>
</section> */}


<section>
<EmailForm/>
</section>


<section>
<Footer/>
</section>




    </main>
  )
}

export default Main