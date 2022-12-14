import React from "react";
import '../Style/About.css'

const About = (props) => {
    return (
        <>
          <div className="about-hero" id='about'>
                <div class="top-wave">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
                <ul className="infobar">
                    <li><span>2000+</span><br/>Sales</li>
                    <li><span>5/5</span><br/>Average star reviews</li>
                    <li><span>Over 200</span><br/>Needle minders</li>
                </ul>

                <div className="bottom-div">
                   <div class="bottom-wave">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>  
                </div>
                <div className="bio">
                    <img id='face' src={require('../images/mom.png')}></img>
                    <div className="aboutme">
                        <h2>Who am I?</h2>
                        <p>My name is Linda Chan and I am a part time mother and part time crosstching enthusiast.  I wanted to collect more cute and humorous needle minders for my crosstching projects, but they were hard to find. So in 2021 I decided to change that and now I have turned this obession into a business. </p>
                    </div>
                </div> 
                
            </div>

        </>
    )
}

export default About