import React from "react"
import "./global.css";
import "./hackerhouse.css"
import logo from "../../content/images/hackerhouse/antalpha.png"
import applybutton from "../../content/images/hackerhouse/applybutton.png"
import nextpage from "../../content/images/hackerhouse/nextpage.png"
import freeaccommodation from "../../content/images/hackerhouse/freeaccommodation.png"
import communityatmosphere from "../../content/images/hackerhouse/communityatmosphere.png"
import businesscoach from "../../content/images/hackerhouse/businesscoach.png"
import industrymentor from "../../content/images/hackerhouse/industrymentor.png"


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
                        <a href="https://tally.so/r/mJ1qBK" className="hackerhouse-link">
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
                        <span className="hackerhouse-offer-littletittle" >Free Accommodation</span>
                        <span>Provide excellent accommodation with a view of the Erhai Lake by the Cang Mountain</span>
                    </div>
                    <div className="hackerhouse-offer">
                        <img src={industrymentor}></img>
                        <span className="hackerhouse-offer-littletittle">Tech Mentors</span>
                        <span>Enjoy a smooth development experience with the presence of technical experts and industry experts</span>
                    </div>
                    <div className="hackerhouse-offer">
                        <img src={businesscoach}></img>
                        <span className="hackerhouse-offer-littletittle">Business Coach</span>
                        <span>Provide participants with business consulting and coaching to assist in project implementation</span>
                    </div>
                    <div className="hackerhouse-offer">
                        <img src={communityatmosphere}></img>
                        <span className="hackerhouse-offer-littletittle">Community Vibe</span>
                        <span>Organizing various activities, and integrating with the local community in Dali</span>
                    </div>


                </div>
                {/* 3、合作伙伴 */}
                <div className="hackerhouse-partners"></div>
            </div>
        </div>


    </>);
}
