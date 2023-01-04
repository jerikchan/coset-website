import React from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"
import "../global.css";
import  "./move.css";

import movebg from "../../../content/images/hackerhouse/movebg.png";

import {Seo} from "gatsby-theme-portfolio-minimal";

export default function move() {

    return (
        <>

            <Seo title="Antalpha Labs-Web3 developers community"/>
            
                {/* 1、这里是logo */}
                <Navi  styles={{padding:'32px 32px'}}></Navi>

                {/* 2、报名页面 */}

                <div className="move">
                    <img className="move_bg" src={movebg}></img>
                    <div className="move_activity ">                    
                            <span className="move_title">Antalpha HackerHouse</span>
                            <span className="move_theme">#Build on Move</span>                              
                            <span className="move_timeloca">12th Feb 2023 - 04th Mar 2023</span>
                            <span className="move_timeloca">Yunnan, Dali</span>
                            <a href="https://tally.so/r/n9NMEE">
                            <button className="move_button" onclick="changeColor('green')">Apply to Hack</button>
                            </a>
                            <div className="move_contact">
                                <span className="move_add">Interesting in partnering?</span>
                                <a href="mailto:hello.labs@antalpha.com">
                                    <span className="move_email">hello.labs@antalpha.com</span>
                                </a>
                            </div>
                    </div>
                </div>

                <Footer></Footer>
        

        </>
    );
}
