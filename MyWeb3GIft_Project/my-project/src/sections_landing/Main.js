import React from 'react'
import { BenefitsandFeatures,ContactInformation,CountDownTimer, CtaSection, ExitIntendPopup, FaqSection, Footer, HeroSection, LeadCaptureForm, SocialProof, TrustSymbols, ValueProposition, VisualContent, Blog } from './index.js'
import Nav from '../Components/Nav.js'



const Main = () => {




  return (
    <main className='relative'>

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
<VisualContent/>
</section>

<section>
<LeadCaptureForm/>
</section>

<section>
<ValueProposition/>
</section>

<section>
<FaqSection/>
</section>

<section>
<ContactInformation/>
</section>

<section>
<TrustSymbols/>
</section>

<section  className=' flex justify-center' >
  <Blog/>
</section>





<section>
<CountDownTimer/>
</section>

<section>
<CtaSection/>
</section>

<section>
<ExitIntendPopup/>
</section>

<section>
<Footer/>
</section>




    </main>
  )
}

export default Main