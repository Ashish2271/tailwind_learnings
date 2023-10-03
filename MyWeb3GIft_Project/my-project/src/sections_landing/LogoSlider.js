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
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>
            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>
            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>


            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>

            <Slider.Slide  className="px-16  filter grayscale hover:grayscale-0">
            <img src={"https://bitcoin.org/img/icons/logotop.svg?1693519667"} alt="" />
            </Slider.Slide>
        </Slider>

        </div>
    )
}

export default LogoSlider