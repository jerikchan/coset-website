import React from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"
import "../global.css";
import "./chiangmai.css";

import ahh from "../../../content/images/hackerhouse/chiangmai/support/ahh.png";
import mantle from "../../../content/images/hackerhouse/chiangmai/support/mantle.png";
import secbit from "../../../content/images/hackerhouse/chiangmai/support/secbit.png";
import scroll from "../../../content/images/hackerhouse/chiangmai/support/scroll.png";
import atcapital from "../../../content/images/hackerhouse/chiangmai/support/a&tcapital.png";
import blockbeats from "../../../content/images/hackerhouse/chiangmai/support/blockbeats.png";
import chain from "../../../content/images/hackerhouse/chiangmai/support/chain.png";
import panews from "../../../content/images/hackerhouse/chiangmai/support/panews.png";
import foresight from "../../../content/images/hackerhouse/chiangmai/support/foresight.png";
import marsbit from "../../../content/images/hackerhouse/chiangmai/support/marsbit.png";

import ethereum from "../../../content/images/hackerhouse/chiangmai/support/ethereum.png";
import mze from "../../../content/images/hackerhouse/chiangmai/support/mze.png";
import buidler from "../../../content/images/hackerhouse/chiangmai/support/buidler.png";
import social from "../../../content/images/hackerhouse/chiangmai/support/social.png";
import oldfashion from "../../../content/images/hackerhouse/chiangmai/support/oldfashion.png";
import starknet from "../../../content/images/hackerhouse/chiangmai/support/starknet.png";
import rebase from "../../../content/images/hackerhouse/chiangmai/support/rebase.png";
import planker from "../../../content/images/hackerhouse/chiangmai/support/plancker.png";
import kucoin from "../../../content/images/hackerhouse/chiangmai/support/kucoin.png";
import movefuns from "../../../content/images/hackerhouse/chiangmai/support/movefuns.png";
import csdn from "../../../content/images/hackerhouse/chiangmai/support/csdn.png";
import ethplanet from "../../../content/images/hackerhouse/chiangmai/support/ethplanet.png";
import ethstorage from "../../../content/images/hackerhouse/chiangmai/support/ethstorage.png";
import logo706 from "../../../content/images/hackerhouse/chiangmai/support/706.png";
import hyper from "../../../content/images/hackerhouse/chiangmai/support/hyper.png";


import {Seo} from "gatsby-theme-portfolio-minimal";

export default function chiangmai() {

    return (
        <>
            <Seo title="Antalpha Labs-Web3 developers community"/> {/* 1、这里是logo */}
            <Navi styles={
                {}
            }></Navi>

            {/* 2、报名页面 */}
            <div className="chiangmai">
                <div className="chiangmai_bgleft">
                    {/* <img src={left}></img> */} </div>
                <div className="chiangmai_activity">

                    {/* <img src={hh_chiangmai} className="chiangmai_activity_pic"></img>               */}
                    <div className="chiangmai_timelink">
                        <span className="chiangmai_time">08th Apr 2023 - 29th Apr 2023</span>

                        <a href="https://tally.so/r/nG6RDZ">
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
                    {/* <img src={right}></img> */} </div>
            </div>


            {/* 3、参加我们 */}
            <div className="participate">
                <div className="participate_wrap">
                    <div className="participate_title">
                        <div className="participate_img"></div>
                    </div>
                    <div className="participate_content">
                        <div className="contentbox4">

                            <h2>Call for Participants🔥</h2>
                            <p>We are excited to announce an upcoming event focused on zero-knowledge proof (ZKP) technology. The event aims to
                                <span>
                                    deepen participants' knowledge and understanding of ZKP and explore its potential applications</span>.</p>
                        </div>

                        <div className="contentbox1">

                            <h2>Who can Participate?</h2>
                            <p>We welcome participants who meet one or more of the following criteria:</p>
                            <ul>
                                <li>Have
                                    <span>programming skills</span>, and preferably have participated in the development of Web3 or ZKP-related open-source projects.</li>
                                <li>Are
                                    <span>ZKP engineers or enthusiasts</span>, with a strong mathematical background and published ZKP-related research results.</li>
                            </ul>
                            <p>If you are interested in participating, please submit your application outlining your experience, qualifications, and interest in ZKP technology.
                            </p>
                            <p>We look forward to reviewing your application.</p>
                        </div>
                        <div className="contentbox2">
                            <h2>Main Focus</h2>
                            <p>Our event will focus on the following areas:</p>
                            <ul>
                                <li>Applications that incorporate
                                    <span>ZKP technology</span>, such as games, social applications, NFT, Defi, and other related areas.
                                </li>
                                <li>Developer
                                    <span>
                                        tools and infrastructure</span>, such as web-based integrated development environments (IDEs) or command-line tools.</li>
                                <li>Other
                                    <span>ZKP-related areas</span>.</li>
                            </ul>
                        </div>
                        <div className="contentbox3">
                            <h2>Schedule of Events</h2>
                            <p>To enhance your knowledge and understanding of ZKP, we will provide you with ZKP learning materials prior to the event. During the event, we will organize a variety of
                                <span>activities, such as lectures, discussions, and brainstorming sessions</span>
                                to help participants develop project ideas. Additionally, we will have mentors available to offer
                                <span>technical and strategic guidance</span>.</p>
                            <p>
                                Finally, we will host
                                <span>a Demo Day</span>
                                to showcase the outcomes of the event. We will invite VCs and industry experts to attend and review the projects.
                            </p>
                            <p>If you have any questions or concerns about the event, please do not hesitate to contact us. We look forward to working with you!</p>
                            <p>Thank you for considering this opportunity.</p>
                        </div>


                    </div>
                </div>
            </div>

            {/* 4、赞助支持 */}
            <div className="chiangmai_support">
                {/* <div className="support_box"></div>  */}
                <div className="cohost">
                    <div className="titleimg1"></div>
                    <div className="contentsupport">
                        <div className="bg1">
                            <img src={ahh}></img>
                        </div>
                        <div className="bg1">
                            <img src={mantle}></img>
                        </div>
                    </div>
                </div>

                <div className="techsupport">
                    <div className="titleimg2"></div>
                    <div className="contentsupport">
                        <div className="bg1">
                            <img src={secbit}></img>
                        </div>
                        <div className="bg1">
                            <img src={scroll}></img>
                        </div>
                    </div>
                </div>

                <div className="talentsupport">
                    <div className="titleimg3"></div>
                    <div className="contentsupport">
                        <div className="bg1">
                            <img src={atcapital}></img>
                        </div>
                    </div>
                </div>

                <div className="communitysupport">
                    <div className="titleimg4"></div>
                    <div className="contentsupport">
                        <div className="bg2">
                            <img src={buidler}></img>
                        </div>
                        <div className="bg2">
                            <img src={csdn}></img>
                        </div>
                        <div className="bg2">
                            <img src={ethereum}></img>
                        </div>
                        <div className="bg2">
                             <img src={ethplanet}></img>
                        </div>
                        <div className="bg2">
                            <img src={ethstorage}></img>
                        </div>
                        <div className="bg2">
                        <img src={hyper}></img>
                        </div>
                        <div className="bg2">
                            <img src={kucoin}></img>
                        </div>
                        <div className="bg2">
                            <img src={movefuns}></img>
                        </div>
                        <div className="bg2">
                            <img src={mze}></img>
                        </div>
                        <div className="bg2">
                            <img src={planker}></img>
                        </div>
                        <div className="bg2">
                            <img src={rebase}></img>
                        </div>
                        <div className="bg2">
                            <img src={starknet}></img>
                        </div>
                        <div className="bg2">
                            <img src={social}></img>
                        </div>
                        <div className="bg2">
                            <img src={oldfashion}></img>
                        </div>
                        <div className="bg2">
                        <img src={logo706}></img>
                        </div>
                    </div>

                </div>

                <div className="media">
                    <div className="titleimg5"></div>
                    <div className="contentsupport">
                        <div className="bg2">
                            <img src={blockbeats}></img>
                        </div>
                        <div className="bg2">
                            <img src={chain}></img>
                        </div>
                        <div className="bg2">
                            <img src={marsbit}></img>
                        </div>
                        <div className="bg2">
                            <img src={panews}></img>
                        </div>
                        <div className="bg2">
                            <img src={foresight}></img>
                        </div>

                    </div>
                </div>


            </div>
            {/* 5、脚注 */}
            <Footer></Footer>
        </>
    );
}
