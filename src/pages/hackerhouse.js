import React, {useState} from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import "./global.css";
import "./hackerhouse.css"
import Navi from "../components/navi"
import lens from "../../content/images/hackerhouse/lens.svg"
import logo from "../../content/images/hackerhouse/antalpha.png"
// import applybutton from "../../content/images/hackerhouse/applybutton.png"
import comingsoon from "../../content/images/hackerhouse/comingsoon.svg"
import timearrow from "../../content/images/hackerhouse/timearrow.svg"
import rightarrow from "../../content/images/hackerhouse/rightarrow.svg"
import nextpage from "../../content/images/hackerhouse/nextpage.png"
import freeaccommodation from "../../content/images/hackerhouse/freeaccommodation.png"
import communityatmosphere from "../../content/images/hackerhouse/communityatmosphere.png"
import businesscoach from "../../content/images/hackerhouse/businesscoach.png"
import industrymentor from "../../content/images/hackerhouse/industrymentor.png"


import {Seo} from "gatsby-theme-portfolio-minimal";
import {time} from "echarts";

export default function HackerHouse() {

    const cardlist = [
        {
            id: '1',
            signuplink: "/zkp",
            theme: "# Zkp",
            "name": "x ETHDenver",

            startDate: "21st Feb, 2023",
            endDate: "06th, Mar 2023",
            location: "@Denver",
            belong: "UPCOMING"
        }, {
            id: '2',
            signuplink: "/move",
            theme: "# Move",
            "name": "x NonceGeek",
            startDate: "21st Feb, 2023",
            endDate: "06th, Mar 2023",
            location: "@Dali",
            belong: "UPCOMING"
        }, {
            id: '3',
            signuplink: "",//跳转到notion项目页面
            theme: "# Infra and open source tools",
            "name": "",
            startDate: "21st Feb, 2023",
            endDate: "06th, Mar 2023",
            location: "@Dali",
            belong: "PAST"
        },

    ]
    const [filteredList, setFilteredList] = useState(cardlist)
    const navList = ["All", "Upcoming", "Ongoing", "Past"]
    const onNavClick = (value) => {
        if (value === "All") {
            return setFilteredList(() => cardlist)
        }

        const target = cardlist.filter(item => item.belong.toUpperCase() === value.toUpperCase())
        setFilteredList(() => target)
        console.log(filteredList);


    }
    return (
        <>
            <Seo title="Antalpha Labs-Web3 developers community"/> {/* <div className="container">  */}
            {/* 1、这里是标题和活动介绍 */}
            <div className="hackerhouse_container">
            <Navi></Navi>
                <div className="hackerhouse_navi">
                    <div className="hackerhouse_navi_left">
                        <div className="hackerhouse_navi_title">HackerHouse Events</div>

                        <div className="hackerhous_detail">
                            <span>Antalpha HackerHouse is a X week co-living community that provides quality free living space for developers who is or will be working on open-source projects.
                            </span>
                            <span>Theme, time and location varies from one event to another, but our excitement to meet free-spirited hackers doesn’t!!</span>
                        </div>

                    </div>
                    <div className="hackerhouse_navi_right">
                        <img src={lens}
                            alt=""></img>
                    </div>

                </div>
                <div className="hackerhouse_events">
                    <div className="hackerhouse_navi_eventslist">
                        <ul className="eventslist">
                            {
                            navList.map((item, idx) => (
                                <li key={idx}
                                    onClick={
                                        () => onNavClick(item)
                                }>
                                    {item} 
                                    <div className="line"></div>
                                    </li>
                                    
                            ))
                        } </ul>
                    </div>
                    <div className="event_container">

                        {/* <a href="https://labs.antalpha.com/hackerhouse">
                        <div className="event_card">
                            <button>UPCOMING</button>
                            <div className="event_name">Antalpha HackerHouse</div>
                            <div className="event_theme"># Zkp</div>
                            <div className="event_timeandlocation">
                                <div className="time">
                                    <span>21st Feb, 2023</span>
                                    <span>06th, Mar 2023</span>
                                </div>
                                <div className="location">@Denver</div>
                            </div>
                            <div className="event_footer">
                                <span>Learn More</span>
                                <div>11</div>
                            </div>
                        </div>
                        </a>
                        <div className="event_card">
                            <button>UPCOMING</button>
                            <div className="event_name">Antalpha HackerHouse</div>
                            <div className="event_theme">#  Move</div>
                            <div className="event_timeandlocation">
                                <div className="time">
                                    <span>21st Feb, 2023</span>
                                    <span>06th, Mar 2023</span>
                                </div>
                                <div className="location">@Denver</div>
                            </div>
                            <div className="event_footer">
                                <span>Learn More</span>
                                <div>11</div>
                            </div>
                        </div>

                        <div className="event_card">
                            <button className="card3">PAST</button>
                            <div className="event_name">Antalpha HackerHouse</div>
                            <div className="event_theme">#Infrastructure and open source tools</div>
                            <div className="event_timeandlocation">
                                <div className="time">
                                    <span>21st Feb, 2023</span>
                                    <span>06th, Mar 2023</span>
                                </div>
                                <div className="location">@Denver</div>
                            </div>
                            <div className="event_footer">
                                <span>Learn More</span>
                                <div>11</div>
                            </div>
                        </div> */}
                        {
                        filteredList.length !== 0 ? filteredList.map((item, idx) => (


                            <div key={idx}>
                                {/* <a href={item.signuplink}> */}
                                <Link to={item.signuplink}>
                                    <div className="event_card">
                                        <div className="event_tag">
                                            <button className={
                                                item.belong
                                            }>
                                                {
                                                item.belong
                                            }</button>

                                            <div className="event_theme">
                                                {
                                                item.theme
                                            }</div>
                                        </div>
                                        <div className="event_name">
                                            <div>
                                                Antalpha HackerHouse
                                            </div>
                                            {
                                            item.name
                                        }</div>

                                        <div className="event_timeandlocation">
                                            <div className="time">
                                                <span>{
                                                    item.startDate
                                                }</span>
                                                <img src={timearrow}
                                                    alt=""></img>
                                                <span>{
                                                    item.endDate
                                                }</span>
                                            </div>
                                            <div className="location">
                                                {
                                                item.location
                                            }</div>
                                        </div>
                                        <div className="event_footer">
                                            <span>Learn More</span>

                                            <img src={rightarrow}
                                                alt=""></img>
                                        </div>

                                    </div>
                                    </Link>
                                {/* </a> */}


                            </div>
                        )) : (
                            <img src={comingsoon}
                                className="coming_img"/>
                        )
                    } </div>
                </div>

            </div>
            {/* <div className="project">
                       <div className="hackerhouse-project">
                        <div className="hackerhouse-project-title">
                            <span className="line"></span>ENTER THE HOUSE</div>
                        <div className="hackerhouse-project-detail">Antalpha Hacker House aims to spread Hacker culture and promote global Hacker collaboration</div>
                        <a href="/src/pages/event/zkp.js" className="hackerhouse-link">
                            <img src={applybutton}
                                alt=""
                                className="apply-button"></img>
                        </a>
                        <div className="hackerhouse-time">DECEMBER 1-21, 2022</div>
                        <div className="hackerhouse-location">LOCATION：DALI</div>
                    </div>
                </div> */}

            <a href="#weoffer" className="weoffer_nextpage">
                <img src={nextpage}
                    alt=""></img>
            </a>
            {/* </div> */}

            {/* 2、活动提供的福利 */}
            <div id="weoffer">
                <div className="hackerhouse-offer-tittle">What We Offer</div>
                <div className="hackerhouse-offer-container">
                    <div className="hackerhouse-offer">
                        <img src={freeaccommodation}></img>
                        <span className="hackerhouse-offer-littletittle">Free Accommodation</span>
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

            </div>
            {/* 3、合作伙伴 */}
            <Footer></Footer>
            {/* </div> */} </>
    );
}
