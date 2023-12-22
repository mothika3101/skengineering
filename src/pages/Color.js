import React from "react";
import "./Color.css"
import colors from "../images/colors.jpg";
 function Color(){
    return(
        <>
           <div className="color1">
              <h1>COLOR RANGE</h1>
           </div>
           <div className="color2">
            <h2>
              We offer a myriad of colours inspired by the beauty nature
            </h2>
           </div>
           <div className="color3">
            <img src={colors} alt="imgg"/>
           </div>
           <div className="color4">
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
export default Color;