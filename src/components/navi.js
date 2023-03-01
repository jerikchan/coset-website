import React from "react"
import {Link} from "gatsby"
import logo from "../../content/images/antalpha/antalphalogo.svg"
import logo2 from "../../content/images/antalpha/antalphalogo2.svg"
import "./navi.css"

let menuclosed = true;
function displaymore() {
    menuclosed = ! menuclosed;
    if (menuclosed) {
        document.getElementById('toggle').setAttribute("class", "menuclosed");
        document.getElementsByClassName('hackerhouse-navi-link')[0].style.display = "block";
        document.getElementsByClassName('hackerhouse-joinus-navi')[0].style.display = "block";
    } else {
        document.getElementById('toggle').setAttribute("class", "menu");
    }
}

export default(props) => (<div className="navi"
    style={
        {
            ...props.styles
        }
}>

   
    <div className="hackerhouse-event-container">
        <div className="hackerhouse-navigator">
            <a href="/" target="_self">
                <div className="antalpha-logo-wrap">
                    <div className="antalpha-logo">

                        {/* <img src={logo}
                        alt=""
                        className="Icon1"/>
                    <img src={logo2}
                        alt=""
                        className="Icon2"/> */} 
                        </div>
                </div>
            </a>

            <div className="hackerhouse-navigation-wrap">
                <div className="hackerhouse-navigation">
                    {/* <a href="https://labs.antalpha.com/hackerhouse" className="hackerhouse-navi"> */}
                    <Link to="/hackerhouse" className="hackerhouse-navi-link">
                        <span>HackerHouse</span>
                        <div className="line"></div>
                    </Link>
                </div>
            </div>
            {/* </a> */}
            <div className="hackerhouse-joinus-wrap">
                <div className="hackerhouse-joinus">

                    <a href="https://t.me/AntalphaLabs" className="hackerhouse-joinus-navi">
                        <span>
                            Join us</span>
                        <div className="line"></div>
                    </a>


                    <span className="menu" id="toggle"
                        onClick={displaymore}></span>
                </div>
            </div>


            {/* <div className="hackerhouse-navi">
                    {/* <a href="https://labs.antalpha.com/hackerhouse" className="hackerhouse-navi"> */}
            {/* <Link to="/hackerhouse" className="hackerhouse-navilink">
                        <span>HackerHouse</span>
                        <div className="line"></div>
                    </Link>
                    {/* 跳转到tele */}
            {/* <a href="" className="joinus-navilink">
                        <span>Join us</span>
                        <div className="line"></div>
                    </a>
                </div> */} 
                
                </div>

    </div>
</div>


)