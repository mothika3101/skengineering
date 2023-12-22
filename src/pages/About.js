import React from "react";
import "./About.css";
import { BiLogoPocket } from "react-icons/bi";
import { FaSuitcase } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { FaThumbsUp } from "react-icons/fa";



 function About(){
    return(
        <>
        <div className="abouttt">
         <div className="about">
            
            <h1 id="about1">About Us</h1>
            <h3 id="about2">home/about</h3>
        </div>
        <div className="sk1">
        <div  className="sk">
            <h1>
                Welcome to<br></br>SK ENGINEERING
            </h1>
            <p>SK Roofing Industries is one of the leading and the largest private sector producer of roofing<br></br>
                 sheets in India. Set up as Hari Om Roofing Industries foundied by chairman Mr H Harish.<br></br>

                 Our range of pre-engineered buildings, roofing, cladding and rainwater systems, made from raw<br></br> 
                 materials of the highest quality in accordance with strict ASTM / JIS / AS and IS standards,<br></br> 
                 offers flexibility of design to suit any construction need be it your business, factory, home <br></br>
                 or office. Our products are made to meet your aesthetic needs as well.<br></br>

                Technology and innovation have always been the cornerstones of IIL's quest for excellence and <br></br>
                these state-of-the-art plants facilitate the company's mission to attain and sustain market leadership,<br></br>
                 through technological and product superiority.The company's strengths lie in its integrated process <br></br>
                 management, knowledge management and control systems. And its seamless supply chain management systems<br></br>
                  further the efficient use of raw materials, while its staff of highly skilled engineers, technicians <br></br>
                  and managers with specialised domain knowledge, ensure the choice of the relevant technology and the<br></br>
                  ability to produce international quality products at a competitive price.While we proudly display the <br></br>
                  sign in our offices, on our trucks and throughout all of our corporate communications, it is important<br></br>
                   to know that the impact of the sign goes beyond the visual aesthetics. In fact, the sign itself is <br></br>
                   quite aged, and not fairly impressive, but what is strong about it is what it communicates about our organization.</p>
        </div>

        <div className="about3">
            <h2>CONTACT US</h2>
        </div>
        </div>

        <div className="about4">
            <h2>Always Good Work, More Than Just A Sign</h2>
            <div className="about5">
            <div className="icon">

              <div className="icon1"><BiLogoPocket /></div>
               <h2>Our Promise</h2>
            </div>
            <div className="icon" >
            
            <div  className="icon1" > <FaSuitcase /> </div>
                <h2>Our Legacy</h2>
            </div>
            <div className="icon">
            <div  className="icon1">  <TiGroupOutline /> </div>
               <h2>Our Pride</h2>
            </div>
            <div className="icon">
            <div  className="icon1"> <FaThumbsUp /></div>
                <h2>Our Motivation</h2>
            </div>
            </div>
        </div>

        <div className="aboutfooter">
            <div className="footer1">
            <div className="unit1">
                <h1>UNIT I</h1>
                <p>90/1 Adhavan Industrial Estate,<br></br>
                   Athipalayam Road, opp CRI pump,<br></br>
                   Chinnavedampatti post, Ganapathy,<br></br>
                   Coimbatore 641006 (TN) </p>
            </div>
            <div className="unit2">
                <h1>UNIT II</h1>
                <p>Head Office<br></br>
                   90/2 Adhavan Industrial Estate,<br></br>
                   Athipalayam Road, opp CRI pump,<br></br>
                   Chinnavedampatti post, Ganapathy,<br></br>
                   Coimbatore 641006 (TN)</p>
            </div>
            <div className="unit3">
                <h1>UNIT III</h1>
                <p>81/1 Adhavan Industrial Estate,<br></br>
                   Athipalayam Road, opp CRI pump,<br></br>
                   Chinnavedampatti post, Ganapathy,<br></br>
                   Coimbatore 641006 (TN)</p>
            </div>
            <div className="unit4">
                <h1>UNIT IV</h1>
                <p>4/147 Senthampalayam,<br></br>
                   Masagoundenchettipalayam Post,,<br></br>
                   Coimbatore 641107 (TN)</p>
            </div>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default About;