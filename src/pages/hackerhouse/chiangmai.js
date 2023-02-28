import React from "react"
import Navi from "../../components/navi"
import "../global.css";
import "./chiangmai.css";
import hh_chiangmai  from "../../../content/images/hackerhouse/chiangmai/hh_chiangmai.png";
import bgleft from "../../../content/images/hackerhouse/chiangmai/bg-left.png";
import bgright from "../../../content/images/hackerhouse/chiangmai/bg-right.png";

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
            <div className="chiangmai_bgleft ">
                <img src={bgleft}></img>
            </div>
                <div className="chiangmai_activity">

                  <img src={hh_chiangmai} className="chiangmai_activity_pic"></img>              
                    <div className="chiangmai_timelink">
                    <span className="chiangmai_time">08th Apr 2023 - 29th Apr 2023</span>

                    <a href="https://www.notion.so/antalpha/AHH-Thailand-ZKP-April-2023-6a51c13fdd654a6792d536a4460735ec">
                        <button className="chiangmai_button" onclick="changeColor('green')">Coming soon</button>
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
                    <img src={bgright}></img>
                </div>
            </div>
        </>
    );
}
