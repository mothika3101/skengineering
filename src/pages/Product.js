import React, { useEffect } from "react";
import "./Product.css";
import deckingsheet from "../images/deckingsheet.jpg";
import embossedsheet from "../images/embossedsheet.jpg";
import polysheet from "../images/polysheet.jpg";
import profilesheet from "../images/profilesheet.jpg";
import steelsheet from "../images/steelsheet.jpg";
import tilesheet from "../images/tilesheet.jpg";
import squaretube from "../images/squaretube.jpg";
import roundtube from "../images/roundtube.jpg";
import blackpipe from "../images/blackpipe.jpg";
import crpipe from "../images/crpipe.jpg";
import AOS from "aos";
import "aos/dist/aos.css";



 function Product(){

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
    return(
        <>
        <div className="pro0">
        <div className="pro1">
            <h1>PRODUCTS WE OFFER</h1>
        </div>
        <div className="pro2">
            <div className="pro6"><h2>SHEETS</h2></div>
            <div className="pro3">
            
                <div className="pro4" data-aos="flip-left"><img src={deckingsheet}alt="pic"/>
                <h3> DECKING SHEET</h3>
                </div>
                <div className="pro4" data-aos="flip-left"><img src={tilesheet}alt="pic"/>
                <h3>TILE SHEET</h3>
                </div>
                <div className="pro4" data-aos="flip-left"><img src={steelsheet}alt="pic"/>
                <h3>STEEL SHEET</h3>
                </div>
                <div className="pro4" data-aos="flip-left"><img src={embossedsheet}alt="pic"/>
                <h3>EMBOSSED SHEET</h3>
                </div>
                <div className="pro4" data-aos="flip-left"><img src={polysheet}alt="pic"/>
                <h3>POLYSHEET</h3>
                </div>
                <div className="pro4" data-aos="flip-left"><img src={profilesheet}alt="pic"/>
                <h3>PROFILE SHEET</h3>
                </div>

            </div>
        </div>
        <div className="pro6"><h2>TUBES</h2></div>
        <div className="pro5">
            <div className="pro4" data-aos="flip-right"><img src={squaretube}alt="pic"/>
          <h3>SAUARE TUBE</h3>
        </div>
        <div className="pro4"  data-aos="flip-right"><img src={roundtube}alt="pic"/>
          <h3>ROUND TUBE</h3>
        </div>
        <div className="pro4"  data-aos="flip-right"><img src={crpipe}alt="pic"/>
          <h3>SK CR PIPE</h3>
        </div>
        <div className="pro4"  data-aos="flip-right"><img src={blackpipe}alt="pic"/>
          <h3>SK BLACK PIPE</h3>
        </div>
        </div>

        <div className="pro7">
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
export default Product;