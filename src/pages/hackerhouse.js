import React, {useState} from "react"
import {Link} from "gatsby"
import Footer from "../components/footer"
import "./global.css";
import "./hackerhouse.css"
import Navi from "../components/navi"
import SEO from "../components/SEO/SEO.js"
import lens from "../../content/images/hackerhouse/lens.svg"
import comingsoon from "../../content/images/hackerhouse/comingsoon.svg"
import timearrow from "../../content/images/hackerhouse/timearrow.svg"
import rightarrow from "../../content/images/hackerhouse/rightarrow.svg"

import events from "../../content/images/og/events.png"

import {Seo} from "gatsby-theme-portfolio-minimal";

export default function HackerHouse() {

    const cardlist = [
        {
            id: '1',
            signuplink: "/hackerhouse/chiangmai", // 跳转到notion项目页面
            theme: "# Zkp",
            "name": "",
            startDate: "08th Apr, 2023",
            endDate: "29th Apr, 2023",
            location: "@Chiang Mai",
            belong: "UPCOMING"


        }, {
            id: '2',
            signuplink: "/hackerhouse/zkp",
            theme: "# Zkp",
            "name": "x ETHDenver",
            startDate: "21st Feb, 2023",
            endDate: "06th, Mar 2023",
            location: "@Denver",
            belong: "PAST"


        }, {
            id: '3',
            signuplink: "/hackerhouse/move",
            theme: "# Move",
            "name": "x NonceGeek",
            startDate: "13th Feb, 2023",
            endDate: "05th, Mar 2023",
            location: "@Dali",
            belong: "PAST"

        }, {
            id: '4',
            signuplink: "https://www.notion.so/antalpha/1a7771e12a444d1b96dd8cfc3f72ed4d?v=b373397745164802ad82571141dd5fcc", // 跳转到notion项目页面
            theme: "# Infra and open source tools",
            "name": "",
            startDate: "1st Dec, 2022",
            endDate: "21st Dec, 2022",
            location: "@Dali",
            belong: "PAST"
        },
    ]
    const [filteredList, setFilteredList] = useState(cardlist)
    const [menuType, setMenuType] = useState(0)
    const navList = ["All", "Upcoming", "Ongoing", "Past"]
    const onNavClick = (value, idx) => {
        if (value === "All") {
            return setFilteredList(() => cardlist)
        }
        setMenuType(idx)
        const target = cardlist.filter(item => item.belong.toUpperCase() === value.toUpperCase())
        setFilteredList(() => target)
        console.log(filteredList);


        // const currentDate = +new Date()
        // return  cardlist.filter(item =>{
        //     if(value === "Upcoming") return currentDate> item.startDate.valueOf()
        //     if(value === "Ongoing") return item.startDate.valueOf() <= currentDate && currentDate <= item.endDate.valueOf()
        //     if(value === "Past") return currentDate > item.startDate.valueOf()
        // })


    }
    return (
        <>

            <Seo title="Antalpha Labs-Web3 developers community" /> 
            <SEO title="HackerHouse Events"
         description="Antalpha HackerHouse is a X week co-living community that provides quality free living space for developers who is or will be working on open-source projects." 
         image={events} ></SEO>
          
            <Navi></Navi>
        {/* 1、这里是标题和活动介绍 */}
        <div className="hackerhouse_container">
        
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
                                style={
                                    {
                                        color: menuType == idx ? 'blue' : ""
                                    }
                                }
                                onClick={
                                    () => onNavClick(item, idx)
                            }>
                                {item}
                                <div className="line"></div>
                            </li>

                        ))
                    } </ul>
                </div>
                <div className="event_container">

                    {
                    filteredList.length !== 0 ? filteredList.map((item, idx) => (


                        <div key={idx}>
                            {/* <a href={item.signuplink}> */}
                            <Link to={
                                item.signuplink
                            }>
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

                                        <img src={rightarrow} loading="lazy"
                                            alt=""></img>
                                    </div>

                                </div>
                            </Link>
                            {/* </a> */} </div>
                    )) : (
                        <img src={comingsoon} loading="lazy"
                            className="coming_img"/>
                    )
                } </div>
            </div>

        </div>


        {/* <a href="#weoffer" className="weoffer_nextpage">
                <img src={nextpage}
                    alt=""></img>
            </a> */}
        {/* </div> */}

        <Footer></Footer>
    </>
    );
}
