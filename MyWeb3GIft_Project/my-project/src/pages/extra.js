import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const BirthdayCardEditor = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [message, setMessage] = useState(`Dear Manisha,\n\nI'm so lucky to get another year around the sun with you, Happy birthday to the love of my life, I'm so excited to celebrate my favorite person today.\n\nYour Best friend\nArpit Singh`);
  const cardRef = useRef(null);

  const handleTextareaChange = (e) => {
    const newText = e.target.value;
    setMessage(newText);
  };

  const handleImageChange = (e) => {
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(imageUrl);
  };

  const handleShare = () => {
    if (!cardRef.current) return;

    html2canvas(cardRef.current).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      // You can use this 'image' variable to share on social media platforms or save it.
      console.log(image);
    });
  };

  return (
    <div>
      <div className="relative mx-5 ml-16 my-10 h-[70vh] w-[44vh] overflow-hidden rounded-3xl bg-sky-950" ref={cardRef}>
        <div className="h-[25vh] w-[40vh] bg-sky-950"></div>
        <div className="absolute mx-28 top-24 z-50 overflow-hidden rounded-3xl">
          {selectedImage && <img className="max-h-[200px] max-w-[160px]" src={selectedImage} alt="Selected" />}
        </div>
        <div className="relative h-[45vh] w-[44vh] rounded-t-[60px] bg-white">
          <div className="absolute top-28 px-6 py-2 font-bold text-gray-400">
            {message.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                <span className={index === 4 ? 'py-5' : ''}>{line}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="flex flex-row-reverse justify-between">
            <a href="https://ibb.co/rHZjdsv">
              <img className="absolute bottom-0 right-7 max-w-[100px]" src="https://i.ibb.co/DQ7JrpL/frame-1.png" alt="frame-1" border="0" />
            </a>
          </div>
        </div>
      </div>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      <div className="flex my-8 py-0 flex-row gap-8">
        <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="" onClick={handleShare} /></div>
        <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png" alt="" onClick={handleShare} /></div>
        <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-512.png" alt="" onClick={handleShare} /></div>
        <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png" alt="" onClick={handleShare} /></div>
        <div><img className="max-h-[50px] hover:scale-105" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-512.png" alt="" onClick={handleShare} /></div>
      </div>
    </div>
  );
};

export default BirthdayCardEditor;
