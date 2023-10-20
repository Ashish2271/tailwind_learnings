import React from 'react'
import Slider from 'react-infinite-logo-slider'

// import "./Styles/LogoSlider.css"




const LogoSlider = () => {
    return (
        <div className='max-h-52 my-14 mx-1'>

            {/* <div className='slider'>
                <div className='slide_track  '>
                    <div className="slide    filter grayscale hover:grayscale-0 "> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                    <div className="slide    filter grayscale hover:grayscale-0"> <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" /> </div>
                </div>


            </div> */}


<Slider
            width="350px"
            duration={40}
            pauseOnHover={false}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>
            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://altcoinsbox.com/wp-content/uploads/2023/01/full-ethereum-logo-grey-300x75.webp"} alt="" />
            </Slider.Slide>
            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0004/1747/brand.gif?itok=7KJ8S1Ue"} alt="" />
            </Slider.Slide>
            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/8/88/Ripple_logo.svg"} alt="" />
            </Slider.Slide>
            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/d/df/Polkadot_Logo.png"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/7/73/Tether_Logo.svg"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://www.livingroomofsatoshi.com/images/litecoin-logo.png"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://logos-world.net/wp-content/uploads/2023/02/Dogecoin-Logo.png"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://upload.wikimedia.org/wikipedia/commons/f/f8/Cardano.svg"} alt="" />
            </Slider.Slide>
        </Slider>

        </div>
    )
}

export default LogoSlider