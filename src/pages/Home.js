import React from "react";
import roofhd from "../images/roofhd.jpg";
import "./Home.css"
import roofsheet from "../images/roofsheet.jpeg";
import roll from "../images/roll.jpeg";
import steel from "../images/steel.jpeg";
import building from "../images/building.jpeg";
import building_roof from "../images/building_roof.jpeg";
import building_steel from "../images/building_steel.jpeg";
import solar from "../images/solar.jpeg";
import deck from "../images/deck.jpeg";
import ventilator from "../images/ventilator.jpeg";
import curve from "../images/curve.jpeg";
import wall from "../images/wall.jpeg";
import bsnl from "../images/bsnl.png";
import tata from "../images/tata.png";
import mahi from "../images/mahi.png";
import nissan from "../images/nissan.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";



 function Home(){
     AOS.init()
    return(
        <>
        <div className="roof">
        <img src={roofhd} alt="img"/>
        </div>
        <div className="text">
        <h2 data-aos="zoom-out" data-aos-duration="1000">"We Manufacture <br></br>Industrial Steels And <br></br>Rooftop Sheets "</h2>
        </div>
        <div className="service">
            <h3>OUR SERVICES</h3>
        </div>
        <div className="images">
        <div className="images1"><img src={roofsheet} alt="img1"/>
        <h2>Roof And Wall Clading</h2>
        </div>
        <div  className="images1"><img src={roll} alt="img2"/>
        <h2>Zincalume steel</h2>
        </div>
        <div  className="images1"><img src={steel} alt="img3"/>
        <h2>Color coated sheet coil</h2>
        </div>
        <div  className="images1"><img src={building} alt="img4"/>
        <h2>Structural solution </h2>
        </div>
        <div  className="images1"><img src={building_roof} alt="img5"/>
        <h2>Smart Building solution</h2>
        </div>
        <div  className="images1"><img src={building_steel} alt="img6"/>
        <h2>Butler building system</h2>
        </div>
        </div>

        <div className="view"><h2>View all services</h2></div>
        <div className="content">
            <h3>!!SK ENGINEERS is one of the leading and the 
                largest<br></br>private sector producer of roofing sheets and steel works in India.!!</h3>
        </div>

        <div className="content2" data-aos="flip-left" data-aos-duration="2000">
            <h2>Why do choose us?</h2>
            <p>
            Our range of pre-engineered buildings, roofing,<br></br>
             cladding and rainwater systems, made from raw materials<br></br>
              of the highest quality in accordance with strict ASTM / JIS / AS<br></br>
               and IS standards, offers flexibility of design to suit any<br></br>
                construction need be it your business, factory, home or office.<br></br>
                 Our products are made to meet your aesthetic needs as well.
            </p>
        </div>
        <div className="project">
           <h3>OUR PROJECTS</h3>
        </div>
        <div className="project1">
            <ul>
                <li>VIEW ALL</li>
                <li> SOLRA FRAME</li>
                <li>GI DECKING SHEET</li>
                <li>ROOF VENTILATOR</li>
                <li>CURVED ROOFING PROFILE</li>
                <li>WALL CLADING</li>
            </ul>
        </div>
        <div className="project2">
        <img src={solar} alt="img7"/>
        <img src={deck} alt="img8"/>
        <img src={ventilator} alt="img8"/>
        <img src={curve} alt="img10"/>
        <img src={wall} alt="img11"/>

        </div>

        <div className="test">
            <h3>TESTIMONIALS</h3>
        </div>
        <div className="test1">
            <div className="test2">
                   <h3>""Many thanks for your roofing system which saved my <br></br>
                    customers at parking.We appreciate your quality concern methods!""</h3>
            </div>
            <div className="test2">
                <h3> ""I am pleased with your dedicated work for building roof <br></br>
                    for my garage.I would surely recommend to my friends to need it.""</h3>

            </div>
        </div>

        <div className="client">
            <div className="client1">
                <h2>1100+</h2>
                <h3>Clients</h3>
            </div>
            <div className="client1">
                <h2>2000+</h2>
                <h3>Projects</h3>
            </div>
            <div className="client1">
                <h2>10+</h2>
                <h3>Experience</h3>
            </div>
        </div>
        <div className="bsnl">
            <h3>Our awesome clients</h3>
            <img  data-aos="zoom-in" data-aos-duration="2000" src={bsnl} alt="img12"/>
            <img data-aos="zoom-in" data-aos-duration="2000" src={tata} alt="img13"/>
            <img data-aos="zoom-in" data-aos-duration="2000" src={nissan} alt="img7"/>
            <img data-aos="zoom-in" data-aos-duration="2000" src={mahi} alt="img7"/>
        </div>

        <div className="footer">
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
        
        </>
    )
}
export default Home;