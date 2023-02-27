import React from "react"
import {Link} from "gatsby"
import logo from "../../content/images/antalpha/antalphalogo.svg"
import logo2 from "../../content/images/antalpha/antalphalogo2.svg"
import "./navi.css"
export default(props) => (
    <div className="navi"
        style={
            {
                ...props.styles,
                height:'110px',
            }
    }>
        <div className="hackerhouse-event-container">
            <div className="hackerhouse-navigator">
                <a href="/" target="_self">
                    <div className="antalpha-logo">
                        <img src={logo}
                            alt=""
                            className="Icon1"/>
                        <img src={logo2}
                            alt=""
                            className="Icon2"/>
                    </div>
                </a>


                <div className="hackerhouse-navigation">
                            {/* <a href="https://labs.antalpha.com/hackerhouse" className="hackerhouse-navi"> */}
                               <Link to="/hackerhouse" className="hackerhouse-navi-link">
                                <span>HackerHouse</span>
                                <div className="line"></div>
                                </Link>
                            {/* </a> */}
                            <a href="https://t.me/AntalphaLabs" className="hackerhouse-joinus-navi">
                                <span>  Join us</span>
                                <div className="line"></div>
                            </a>
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
