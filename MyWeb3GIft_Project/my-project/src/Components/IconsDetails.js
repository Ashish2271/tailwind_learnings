import React from 'react'
import { birthday, calendar, fukubukuro1, wedding, graduation } from '../assets/Images';
import "./Style/IconsDetails.css"




const IconsDetails = () => {
    return (
        

         
                <div class="containerIcon m-28 ">
                    <div class="cardIcon">
                        <div class="image">
                            <img href="#" src={birthday} alt='Christmas Calender' />
                        </div>
                        <div class="ContentDetails">
                            <h3>This is "ContentDetails"</h3>
                            <p>DIn publishing and .</p>
                        </div>
                    </div>

                    <div class="cardIcon">
                        <div class="image">
                            <img href="#" src={ calendar}alt='Birthday'/>
                        </div>
                        <div class="ContentDetails">
                            <h3>This is "ContentDetails"</h3>
                            <p>DIn publishing and .</p>
                        </div>
                    </div>
                    <div class="cardIcon">
                        <div class="image">
                            <img href="#" src= {fukubukuro1}  alt='Wedding'/>
                        </div>
                        <div class="ContentDetails">
                            <h3>This is "ContentDetails"</h3>
                            <p>DIn publishing and .</p>
                        </div>
                    </div>
                    <div class="cardIcon">
                        <div class="image">
                            <img href="#" src={wedding} alt='Fukubukuro' />
                        </div>
                        <div class="ContentDetails">
                            <h3>This is "ContentDetails"</h3>
                            <p>DIn publishing and .</p>
                        </div>
                    </div>


                    <div class="cardIcon">
                        <div class="image">
                            <img href="#" src={graduation} alt='Fukubukuro' />
                        </div>
                        <div class="ContentDetails">
                            <h3>This is "ContentDetails"</h3>
                            <p>DIn publishing and .</p>
                        </div>
                    </div>

                </div>
          



       
    )
}

export default IconsDetails