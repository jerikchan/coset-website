import React from "react"
import "./hackerhouse.css"
import logo from "../../content/images/antalpha.png"
import applybutton from "../../content/images/applybutton.png"
import nextpage from "../../content/images/nextpage.png"
import freeaccommodation from "../../content/images/freeaccommodation.png"
import communityatmosphere from "../../content/images/communityatmosphere.png"
import businesscoach from "../../content/images/businesscoach.png"
import industrymentor from "../../content/images/industrymentor.png"


import {Seo} from "gatsby-theme-portfolio-minimal";

export default function HackerHouse() {
    return (<>
        <Seo title="Antalpha Labs-Web3 developers community"/>
        <div className="container"> {/* 1、这里是标题和活动介绍 */}
            <div className="hackerhouse1">
                <div className="hackerhouse-title">
                    <img src={logo}
                        alt=""
                        className="Icon"/>
                </div>

                <div className="project">
                    <div className="hackerhouse-project">
                        <div className="hackerhouse-project-title">
                            <span className="line"></span>ENTER THE HOUSE</div>
                        <div className="hackerhouse-project-detail">Antalpha Hacker House aims to spread Hacker culture and promote global Hacker collaboration</div>
                        <a href="https://tally.so/r/mJ1qBK">
                            <img src={applybutton}
                                alt=""
                                className="apply-button"></img>
                        </a>
                        <div className="hackerhouse-time">DECEMBER 1-21, 2022</div>
                        <div className="hackerhouse-location">LOCATION：DALI</div>
                    </div>
                </div>

                <a href="#weoffer" className="nextpage">
                    <img src={nextpage}
                        alt=""></img>
                </a>
            </div>

            {/* 2、活动提供的福利 */}
            <div id="weoffer">
                <div className="hackerhouse-offer-tittle">What We Offer</div>
                <div className="hackerhouse-offer-container">
                    <div className="hackerhouse-offer">
                        <img src={freeaccommodation}></img>
                        <h4>Free Accommodation</h4>
                        <span>Provide excellent accommodation and view Erhai Lake near Cangshan Mountain</span>
                    </div>
                    <div className="hackerhouse-offer">
                        <img src={industrymentor}></img>
                        <h4>Industry Mentor</h4>
                        <span>Technology experts and industry leaders enjoy silky development experience</span>
                    </div>
                    <div className="hackerhouse-offer">
                        <img src={businesscoach}></img>
                        <h4>Business Coach</h4>
                        <span>Provide business consultation and guidance for participants and assist in project implementation</span>
                    </div>
                    <div className="hackerhouse-offer">
                        <img src={communityatmosphere}></img>
                        <h4>Community Atmosphere</h4>
                        <span>Organize various leisure activities and organically combine with Dali local communities</span>
                    </div>


                </div>
                {/* 3、合作伙伴 */}
                <div className="hackerhouse-partners"></div>
            </div>
        </div>


    </>);
}
