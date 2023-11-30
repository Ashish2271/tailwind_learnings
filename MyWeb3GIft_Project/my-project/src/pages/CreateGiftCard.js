import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import Nav01 from '../Components/Nav01';
import { Footer } from '../sections_landing';
import { QR_CODE } from '../assets/Images';
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { useUser } from '@clerk/clerk-react';
import { useFormData } from '../states/FormDataContext';



const CreateGiftCard = () => {
    const { formData, setFormData } = useFormData();
    const {user} = useUser()
    console.log(formData)
    const senderUserId = user ? user.id : null

    const addGift = async (senderUserId, giftData) => {
        try {
          const db = getFirestore();
      
          // Reference to the user's gifts collection
          const userGiftsRef = collection(db, `users/${senderUserId}/gifts`);
      
          // Add a new document to the gifts collection
          const giftDocRef = await addDoc(userGiftsRef, giftData);
      
          console.log("Gift added with ID:", giftDocRef.id);
        } catch (error) {
          console.error("Error adding gift:", error);
        }
      };
      const handleTextareaChange = (e) => {
        const newText = e.target.value;
        setFormData((prevData) => ({
          ...prevData,
          greeting: newText,
        }));
      };

    //   const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    
    //     if (file) {
    //       const reader = new FileReader();
    
    //       reader.onload = () => {
    //         setSelectedImage(reader.result);
    //       };
    
    //       reader.readAsDataURL(file);
    //     }
    //   };
    
      // Example usage
     // Replace with the actual sender's user ID
      
    //   const giftData = {
    //     senderName: "Sender's Name",
    //     senderEmail: "ashishpandey46209@gmail.com",
    //     receiverName: "Receiver's Name",
    //     receiverEmail: "ashispandey138c@gmail.com",
    //     greeting: "Short Greeting",
    //     date: "2023-12-01", // Replace with the actual date
    //   };
      
      // Call the function to add the gift to the database
    //   addGift(senderUserId, giftData);

    const [selectedImage, setSelectedImage] = useState(
        'https://img.freepik.com/free-photo/portrait-beautiful-teen-dark-haired-woman_155003-8196.jpg?w=900&t=st=1701185941~exp=1701186541~hmac=140663c065997c6f2150e2f9957ead5b435db8489b2b733453ca4f288a443b3b' // Replace with the URL of your dummy image
    );
     
    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };


    const [message, setMessage] = useState(
        `Dear Manisha,\n\nI'm so lucky to get another year around the sun with you, Happy birthday to the love of my life, I'm so excited to celebrate my favorite person today.\n\nYour Best friend\nArpit Singh`
    );
    const cardRef = useRef(null);
   

    // const handleShare = () => {
    //     if (!cardRef.current) return;
    
    //     html2canvas(cardRef.current).then((canvas) => {
    //       const image = canvas.toDataURL('image/png');
    //       // You can use this 'image' variable to share on social media platforms or save it.
    //       console.log(image);
    //     });
    //   };
    


      const handleLinkedInShare = () => {
        if (!cardRef.current) return;
      
        html2canvas(cardRef.current).then((canvas) => {
          const image = canvas.toDataURL('image/png');
      
          // Create a share link for LinkedIn
          const linkedInShareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=Birthday%20Card&summary=Check%20out%20this%20birthday%20card&source=My%20Website&source=My%20Website&image=${encodeURIComponent(image)}`;
      
          // Open a new window to redirect to LinkedIn for sharing
          window.open(linkedInShareLink, '_blank');
        });
      };
      


      const handleFacebookShare = () => {
        if (!cardRef.current) return;
      
        html2canvas(cardRef.current).then((canvas) => {
          const image = canvas.toDataURL('image/png');
      
          // Create a share link for Facebook
          const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=Check%20out%20this%20birthday%20card&picture=${encodeURIComponent(image)}`;
      
          // Open a new window to redirect to Facebook for sharing
          window.open(facebookShareLink, '_blank');
        });
      };
      
      const handleWhatsAppShare = () => {
        if (!cardRef.current) return;
      
        html2canvas(cardRef.current).then((canvas) => {
        //   const image = canvas.toDataURL('image/png');
      
          // Create a share link for WhatsApp
          const whatsAppShareLink = `https://api.whatsapp.com/send?text=Check%20out%20this%20birthday%20card%20${encodeURIComponent(window.location.href)}`;
      
          // Open a new window to redirect to WhatsApp for sharing
          window.open(whatsAppShareLink, '_blank');
        });
      };
      
      const handleTwitterShare = () => {
        if (!cardRef.current) return;
      
        html2canvas(cardRef.current).then((canvas) => {
        //   const image = canvas.toDataURL('image/png');
      
          // Create a share link for Twitter
          const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20birthday%20card&hashtags=BirthdayCard`;
      
          // Open a new window to redirect to Twitter for sharing
          window.open(twitterShareLink, '_blank');
        });
      };
      
      const handleInstagramShare = () => {
        if (!cardRef.current) return;
      
        html2canvas(cardRef.current).then((canvas) => {
        //   const image = canvas.toDataURL('image/png');
      
          // Create a share link for Instagram
          const instagramShareLink = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;
      
          // Open a new window to redirect to Instagram for sharing
          window.open(instagramShareLink, '_blank');
        });
      };
      

    //   const handleDownload = () => {
    //     if (!cardRef.current) return;
    
    //     html2canvas(cardRef.current).then((canvas) => {
    //       const image = canvas.toDataURL('image/png');
    
    //       // Create an "a" element to act as a download link
    //       const downloadLink = document.createElement('a');
    //       downloadLink.href = image;
    //       downloadLink.download = 'birthday_card.png';
    
    //       // Append the link to the body and simulate a click to trigger the download
    //       document.body.appendChild(downloadLink);
    //       downloadLink.click();
    
    //       // Remove the link from the body
    //       document.body.removeChild(downloadLink);
    //     });
    //   };
    


    const handleDownload = () => {
        if (!cardRef.current) return;
      
        html2canvas(cardRef.current, {
          onclone: (doc) => {
            const cardElement = doc.querySelector('.rounded-card'); // Add a class to the card container
            if (cardElement) {
              // Apply rounded border to the cloned card container
              cardElement.style.borderRadius = '0px'; // Adjust the radius as needed
            }
          }
        }).then((canvas) => {
          const image = canvas.toDataURL('image/png');
      
          // Optionally, you can trigger a download
          const downloadLink = document.createElement('a');
          downloadLink.href = image;
          downloadLink.download = 'rounded_birthday_card.png';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        });
      };
      const handlesave =(formData)=>{
              // Access form data from props.location.state
    //   const formData = props.first.location.state;

      // Use formData to save to the database
      const giftData = {
        senderName: formData.name,
        senderEmail: formData.email,
        senderImage: user.imageUrl,
        receiverName: formData.receiverName,
        receiverEmail: formData.receiverEmail,
        greeting: formData.greeting,
        date: formData.date,
        image: selectedImage,
        
      };

        addGift(senderUserId, giftData);

        alert("your data is saved ")
      }

    //   const handleEmail = (formData) => {
    //     sendEmail({
    //         email: formData.receiverEmail,
    //         subject: 'MyWeb3Gift',
    //         message,
    //       });
    //   }
//     const [status, setStatus] = useState('');

//   const handleEmail = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await sendEmail({ email: formData.receiverEmail,
//                 subject: 'MyWeb3Gift',
//                 message,});
//       setStatus(result ? 'Email sent successfully!' : 'Failed to send email.');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setStatus('Failed to send email. Please check the console for details.');
//     }
//   };
const sendEmail = (formData) => {
    // Replace 'recipient@example.com' with the actual email address of the recipient
    const recipientEmail = formData.receiverEmail;

    // Replace 'Hello! This is a custom message.' with your custom message
    const message = formData.greeting;

    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=Subject&body=${encodeURIComponent(message)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };
      

    return (
        <div>
            <Nav01></Nav01>
            <div className="bg-sky-950 h-[90px] w-screen"></div>




            <div className="flex min-h-screen py-14 flex-row content-center items-center justify-items-center">

                <div
                    className="relative mx-auto py-10 flex min-h-max min-w-[95vw] flex-col items-center gap-9 rounded-3xl bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://img.freepik.com/free-photo/rose-gold-birthday-3d-ribbons-greeting-card-beige-background_53876-129030.jpg?w=1380&t=st=1701182770~exp=1701183370~hmac=217ddf3161c0f9dfb431d4f46cc89f38f8187548de87ef64302b2acb85056019')",
                    }}
                >

                    <div className="flex h-screen items-center justify-center">
                        <div className="absolute left-0 mr-0 min-h-[85vh] min-w-[50px] rounded-e-full bg-sky-950"></div>

                        <div>
                            <div className="bottom-2 my-16 mt-10 w-[40vw] overflow-hidden rounded-3xl border-2 border-black bg-white">
                                <div className="flex justify-between">
                                    <div><a href="https://imgbb.com/"><img className="max-w-[70px] my-2 mx-6 " src="https://i.ibb.co/mHtFKGs/Frame-4030.png" alt="Frame-4030" border="0" /></a></div>
                                    <div className="">
                                        <input className="rounded-3xl hover:boder-2 hover:border-white my-8 mx-6 bg-sky-50 font-bold text-gray-300" type="file" name="" id="" onChange={handleImageChange} />
                                    </div>
                                </div>
                                <div className="py-5">
                                    <textarea className="px-8 py-4" name="" id="" cols="30" rows="10" value={formData.greeting} onChange={handleTextareaChange} >
                                     

                                    </textarea>
                                </div>
                            </div>

                            <div className="my-1 text-gray-500 font-semibold max-w-[45vw]">
                                <span className=""> Print this card and handover personally to your friend and family, Customize this card according to your chioce for giving personal and feel.</span>
                                <br />
                                <span className="py-4"> Like: Colour, Text, Photo of your receiver</span>
                            </div>

                            <div className=" flex flex-row max-w-[35vw] justify-between">
                                <button onClick={handleDownload} className="mx-auto my-11 items-center rounded-3xl bg-yellow-300 px-9 py-2 text-xl font-bold text-white hover:bg-yellow-400 focus:ring-2">Print</button>

                                <button className="mx-auto my-11 items-center rounded-3xl bg-yellow-300 px-9 py-2 text-xl font-bold text-white hover:bg-yellow-400 focus:ring-2" onClick={() => handlesave(formData)}>Save</button>

                                <button className="mx-auto my-11 items-center rounded-3xl bg-yellow-300 px-9 py-2 text-xl font-bold text-white hover:bg-yellow-400 focus:ring-2" onClick={() => sendEmail(formData)}>Send Email</button>
                            </div>
                            <div>
                                <span className="text-gray-500 font-semibold my-5 ">Share this card with your friend</span>

                                <div className="flex my-8 py-0 flex-row gap-8">
                                    <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="" onClick={handleFacebookShare}  /></div>
                                    <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="" onClick={handleLinkedInShare}  /></div>
                                    <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-512.png" alt="" onClick={handleWhatsAppShare}  /></div>
                                    <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="" onClick={handleInstagramShare}  /></div>
                                    <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt="" onClick={handleTwitterShare}  /></div>

                                </div>
                            </div>
                        </div>

                        <div className="rounded-card  relative mx-5 ml-16 my-10 h-[70vh] w-[44vh] overflow-hidden rounded-3xl bg-sky-950" ref={cardRef}  >
                            <div className="h-[25vh] w-[40vh] bg-sky-950"></div>
                            <div className="absolute mx-28 top-24 z-30 overflow-hidden rounded-3xl">

                                {/* <img className="max-h-[200px] max-w-[160px]" src="https://cdn.pixabay.com/photo/2023/10/20/16/17/woman-8329829_1280.jpg" alt="" /> */}





                                {selectedImage && (
                                    <img className="max-h-[200px] max-w-[160px]" src={selectedImage} alt="Selected" />

                                )}

                            </div>
                            <div className="relative h-[45vh] w-[44vh] rounded-t-[60px] bg-white">
                                <div className="absolute top-28 px-6 py-2  font-bold text-gray-400">
                                    {/* <span className="">
                                        Dear Manisha,
                                        <br />
                                        I'm so lucky to get another year around the sun with you, Happy birthday to the love of my life, I'm so excited to celebrate my favorite person today.
                                        <br />
                                        <span className="py-5">
                                            Your Best friend
                                            <br />
                                            Arpit Singh</span
                                        >
                                    </span> */}

                                    {formData.greeting.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {index > 0 && <br />}
                                            <span className={index === 4 ? 'py-5' : ''}>{line}</span>
                                        </React.Fragment>
                                    ))}


                                </div>

                                <div className="flex flex-row-reverse justify-between">
                                   <img className="absolute bottom-0 right-7 max-w-[100px]" src={QR_CODE} alt="frame-1" border="0" />
                                </div>
                            </div>

                        </div>



                        <div className="absolute right-0 min-h-[85vh] min-w-[50px] rounded-s-full bg-sky-950"></div>
                    </div>
                </div>
            </div>

<Footer></Footer>
        </div>
    )
}

export default CreateGiftCard