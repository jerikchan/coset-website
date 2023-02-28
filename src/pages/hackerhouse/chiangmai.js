import React from "react"
import Navi from "../../components/navi"
import "../global.css";
import "./chiangmai.css";
import hh_chiangmai  from "../../../content/images/hackerhouse/chiangmai/hh_chiangmai.png";
import left from "../../../content/images/hackerhouse/chiangmai/left1.png";
import right from "../../../content/images/hackerhouse/chiangmai/right2.png";

import {Seo} from "gatsby-theme-portfolio-minimal";

export default function chiangmai() {

    return (
        <>
            <Seo title="Antalpha Labs-Web3 developers community"/> {/* 1、这里是logo */}
            <Navi styles={
                {padding: '35px 40px'}
            }></Navi>

            {/* 2、报名页面 */}
            <div className="chiangmai">
            <div className="chiangmai_bgleft">
                {/* <img src={left}></img> */}
            </div>
                <div className="chiangmai_activity">

                  {/* <img src={hh_chiangmai} className="chiangmai_activity_pic"></img>               */}
                    <div className="chiangmai_timelink">
                    <span className="chiangmai_time">08th Apr 2023 - 29th Apr 2023</span>

                    <a href="https://www.notion.so/antalpha/AHH-Thailand-ZKP-April-2023-6a51c13fdd654a6792d536a4460735ec">
                        <button className="chiangmai_button" onclick="changeColor('green')">Apply to Hack</button>
                    </a>
                    <div className="chiangmai_contact">
                        <span className="chiangmai_add">Interesting in partnering?</span>
                        <a href="mailto:hello.labs@antalpha.com">
                            <span className="chiangmai_email">hello.labs@antalpha.com</span>
                        </a>
                    </div>
                    </div>
                </div>
                <div className="chiangmai_bgright">
                    {/* <img src={right}></img> */}
                </div>
            </div>
        </>
    );
}
