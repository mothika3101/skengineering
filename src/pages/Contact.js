import React from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

 function Contact(){
    return(
        <>
           
           <div className="con0">
           <div className="con1">
              <h1>Contact Us</h1>
              <form>
                <div className="con2">
                <input placeholder="Enter Your Name"></input>
                </div>
                <div className="con2">
                <input placeholder="Enter Your Email"></input>
                </div>
                <div className="con2">
                <input placeholder="Enter Your Phone no"></input>
                </div>
                <div className="con2">
                <input placeholder="Enter Your Subject"></input>
                </div>
              </form>
           </div>
           <div className="con3">
            <input placeholder="message"></input>
           </div>
           <div className="con4"><h1>Send Now</h1></div>
           </div>

           <div className="con5">
              <div className="con6">
                 <div className="con7"><FaLocationDot /></div>
                 <p>No. 90/2, Adhavan Industrial Estate,<br></br>
                     Athipalayam Road, (Opp) CRI Pumps,<br></br>
                      Chinnavedampatti, Ganapathy Post,<br></br>
                       Coimbatore - 641 006, India.</p>
              </div>
              <div className="con6">
                 <div className="con7"> <FaSquarePhone /></div>
                 <p>+91 8754040701 <br></br>
                    +91 8754040703<br></br>
                    +91 8754040708<br></br>
                    +91 9442612123</p>
              </div>
              <div className="con6">
                  <div className="con7"> <IoIosMail /></div>
                  <p>harimetrosteels@gmail.com<br></br>
                     info@hrionline.in<br></br>
                     contact@hrionline.in<br></br>
                      enquiry@hariomroofing.com<br></br>
                     sales@hariomroofing.com</p>
              </div>
              

           </div>
           <div className="con8">
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
export default Contact;