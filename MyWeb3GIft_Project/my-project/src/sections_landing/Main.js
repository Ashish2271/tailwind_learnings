import React, { useEffect } from 'react';
import { VideoUSP, GiftDetails,  EmailModal, TrustSymbols, CountDownTimer, FaqSection, Footer, HeroSection, Blog, IconsDetails, WhoForSection, Steps } from './index.js'
import Nav01 from '../Components/Nav01.js'
// import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useAuth, useUser } from '@clerk/clerk-react';
import { useApproval } from '../states/ApprovalContext.js';






const Main = () => {


  // const { getToken } = useAuth();

  // useEffect(() => {
  //   const signInWithClerk = async () => {
  //     const auth = getAuth();
  //     const token = await getToken({ template: "integration_firebase" });
  //     const userCredentials = await signInWithCustomToken(auth, token);
 
  //     /**
  //      * The userCredentials.user object will call the methods of
  //      * the Firebase platform as an authenticated user.
  //      */
  //     console.log("user ::", userCredentials.user);
  //   };
 
  //   signInWithClerk();
  // }, []);
  const { isLoaded  } = useAuth();
  const {  isSignedIn, user } = useUser();
  const { isApproved, setApproval } = useApproval();



  useEffect(() => {
    const fetchUserData = async () => {
      if (isSignedIn) {
        try {

          const response = await fetch(`https://myweb3gift-bd98e-default-rtdb.firebaseio.com/users/${user.id}.json`);
          console.log(response)
          // const response = await fetch(`https://myweb3gift-bd98e-default-rtdb.firebaseio.com/submitemails/-NkJIn1tg7RhVEh-7-IF.json`);
          
          console.log(response)
          if (response.ok) {
            const data = await response.json();
            console.log('Fetch URL:', `https://myweb3gift-bd98e-default-rtdb.firebaseio.com/submitemails/${user.id}.json`);
          console.log('data',data)
         console.log(user.id)
    
         if (data && typeof data.approve !== 'undefined') {
          setApproval(data.approve);
        }
            console.log(isApproved)
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
  
    fetchUserData();
  }, [isSignedIn, user]);
  
  console.log("Outside useEffect:", isApproved);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <main  >

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





<EmailModal></EmailModal>




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


{/* <section>
  <Testimonials/>
</section> */}


{/* <section>
  <LogoSlider/>
</section> */}



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


{/* <section>
<EmailForm/>
</section> */}


<section>
<Footer/>
</section>




    </main>
  )
}

export default Main