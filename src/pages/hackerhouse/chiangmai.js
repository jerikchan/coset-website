import React from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"
import "../global.css";
import "./chiangmai.css";

// import hh_chiangmai from "../../../content/images/hackerhouse/chiangmai/hh_chiangmai.png";
// import left from "../../../content/images/hackerhouse/chiangmai/left1.png";
// import right from "../../../content/images/hackerhouse/chiangmai/right2.png";

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

            {/* 3、赞助支持 */}
            <div className="chiangmai_support">
                <div className="support_box"></div>

            </div>

            {/* 4、参加我们 */}
            <div className="participate">
                <div className="participate_wrap">
                    <div className="participate_title">
                        <div className="participate_img"></div>
                    </div>
                    <div className="participate_content">
                        <div className="contentbox1">
                            <h2>Who is eligible to participate?</h2>
                            <p>You&nbsp;
                                <span>
                                    must</span>
                                    &nbsp;be:</p>
                            <ol>
                                <li>Have a&nbsp;
                                    <span>technical background
                                    </span>
                                    &nbsp; and be proficient in writing code.</li>
                                <li>Be&nbsp;
                                    <span>a Zero-knowledge Proof Engineer or Enthusiast
                                    </span>&nbsp;
                                    who is interested in integrating ZKP with your area of expertise, such as AI engineering or game development.</li>
                                <li>Be involved in developing&nbsp;
                               <span>open-source projects
                                    </span>&nbsp;that focus on ZK applications or developer tools and infrastructure.</li>
                            </ol>
                        </div>
                        <div className="contentbox2">
                            <h2>Areas of Focus</h2>
                            <ol>
                                <li>
                                    <span>Application prototypes.
                                    </span>This refers to the end-to-end proof-of-concept implementation of user-facing, ZK-enabled apps. Examples include <a href="https://0xparc.org/blog/zk-group-sigs">zkmessage.xyz</a>, <a href="https://docs.zkitter.com/">zkitter.com</a>, <a href="https://zkga.me/">Dark Forest</a>, <a href="https://about.unirep.social/">unirep.social</a>, <a href="https://www.heyanon.xyz/">heyanon</a>, and <a href="https://nightmart.xyz/">nightmarket</a>.</li>
                                <li>
                                    <span>Developer tools and infrastructure.
                                    </span>This includes developer tools and infrastructure such as &nbsp;<a href="https://zkrepl.dev/">zkrepl</a>, <a href="https://github.com/projectsophon/hardhat-circom">hardhat-circom</a>,<a href="https://github.com/zkonduit/ezkl"> EZKL</a>, or <a href="https://zcash.github.io/halo2/user/wasm-port.html">Halo2-WASM port</a>.</li>
                            </ol>
                        </div>
                        <div className="contentbox3">
                            <h2>Structure</h2>
                            <p>The primary goal of residents is to ship an applied ZK project, in one of the areas listed above. Our co-working space will serve as a “hub” for residents over the program.</p>

                            <p>
                                Throughout the program, we will be running events, workshops, and talks, to ensure that participants are kept up to date on the latest developments across the ZK stack. We
                                &nbsp;<span>participants with a strong general math and computer science background but limited prior experience in ZK tech are encouraged to apply.</span>
                            </p>

                            <p>
                                Residents should aim to produce the following deliverables by the end of the program:</p>
                            <ul>
                                <li>At least one technical writeup, research report, or paper. We encourage participants to make their findings public on platforms such as the <span><a href="https://0xparc.org/blog">0xPARC blog</a></span> or <span><a href="https://zkresear.ch/">zkresear.ch</a></span>.</li>
                                <li>A well-documented open-source repository, tool, and/or library, consumable by other teams in the applied ZK space.</li>
                                <li>(Optionally - where applicable) A live, proof-of-concept prototype of the project in action, accessible by end users. This is more likely to be relevant for application-level teams than infrastructure teams.</li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
            {/* 5、脚注 */}
            <Footer></Footer>
        </>
    );
}
