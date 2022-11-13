import React from "react";
import "./indexpage.css";
import logo from "../../content/images/antalpha/antalphalogo.svg"
import logo2 from "../../content/images/antalpha/antalphalogo2.svg"
import nextpage from "../../content/images/hackerhouse/nextpage.png"
import mianlogo from "../../content/images/antalpha/mainlogo.svg"
import {Seo} from "gatsby-theme-portfolio-minimal";

import chatbot from "../../content/images/antalpha/chatbot.jpg"
import geolink from "../../content/images/antalpha/geolink.png"
import produceart from "../../content/images/antalpha/produceart.png"
import didmove from "../../content/images/antalpha/didmove.png"
import dagora from "../../content/images/antalpha/dagora.png"
import lunswap from "../../content/images/antalpha/lunswap.png"
import graphene from "../../content/images/antalpha/graphene.png"
import daospacenft from "../../content/images/antalpha/daospacenft.png"
import daoverselink from "../../content/images/antalpha/daoverselink.png"

export default function IndexPage() {
    const imglist = [
        {
            id: '1',
            imgurl: chatbot,
            text: 'Chatbot Trainer DAO'
        },
        {
            id: '2',
            imgurl: daospacenft,
            text: 'DAO Space NFT Pass'
        },
        {
            id: '3',
            imgurl: dagora,
            text: 'dAgora 协同写作'
        },
        {
            id: '4',
            imgurl: graphene,
            text: 'Graphene云钱包'
        }, {
            id: '5',
            imgurl: lunswap,
            text: 'LUNSWAP'
        }, {
            id: '6',
            imgurl: didmove,
            text: 'Move DID'
        }, {
            id: '7',
            imgurl: produceart,
            text: 'GA生成艺术首发平台'
        }, {
            id: '8',
            imgurl: geolink,
            text: 'GeoLink'
        }, {
            id: '9',
            imgurl: daoverselink,
            text: 'DAOVERSE.link'
        }
    ]
    return (
        <>
            <Seo title="Antalpha Labs-Web3 developers community"/> {/* 1、首页 */}
            <div className="antalpha-container">
                {/* 顶部导航 */}
                <div className="antalpha-container1">
                    <div className="antalpha-navigator">
                        <div className="antalpha-logo">
                            <img src={logo}
                                alt=""
                                className="Icon"/>
                            <img src={logo2}
                                alt=""
                                className="Icon"/>
                        </div>
                        <div className="antalpha-navi">
                            <a href="https://labs.antalpha.com/hackerhouse" className="hackerhouse-navi"><span>Hacker House</span><div className="line"></div></a>
                            <a href="#showcase" className="showcase-navi"><span>Showcase</span><div className="line"></div></a>
                        </div>
                    </div>
                    {/* 主要内容 */}
                    <div className="antalpha-mianlogo">
                        <img src={mianlogo}
                            alt=""
                            className="Icon"/>
                    </div>

                    <div className="antalpha-intro">
                        <div>Antalpha Labs is a web3 developer community...</div>
                        <a href="https://discord.gg/fhhecXWh"><button className="botton">Join us</button></a>
                    </div>

                    <a href="#showcase" className="nextpage">
                        <img src={nextpage}
                            alt=""></img>
                    </a>
                </div>

                {/* 2、关于我们 */}ç
                <div className="antalpha-container1">
                    <div className="about-antalpha">
                        <div className="antalpha-title antalpha-bigtitle">About Antalpha Labs</div>
                        <div className="antalpha-title antalpha-detailintro">Antalpha Labs is a web3 developer community dedicated to helping developers build open source software to promote innovation and application of web3 technology.</div>
                        <div className="antalpha-title antalpha-aboutus">We are here to:</div>
                        <ul className="antalpha-title antalpha-aboutuslist">
                            <li>✓ Learn web3 technology.</li>
                            <li>✓ Build open source projects.</li>
                            <li>✓ Support open source projects by grant and user growth strategy.</li>
                        </ul>
                    </div>
                </div>

                {/* 3、案例 */}
                <div id="showcase">
                    <div className="antalpha-showcase">
                        <div className="showcase-title">
                            <div>Showcase</div>
                            <a href="https://hackerhouses.notion.site/1402cb855603469a932054804e9716a6?v=11bf455c9bb04042956d82a7bff200b3">
                                <button className="botton viewall-button">View all
                                    <div className="arrow">➔</div>
                                </button>
                            </a>
                        </div>
                        <div className="showcase-cutline"></div>
                        <div className="showcase-scroll">
                            <div className="showcase-list">

                                {
                                imglist.map(({
                                    text,
                                    imgurl
                                }, idx) => {
                                    return (
                                        <div className="thefirsthacker-case"
                                            key={
                                                text + idx
                                        }>

                                            <img src={imgurl}
                                                className="case-photo"
                                                alt=""/>

                                            <span>{text}</span>
                                        </div>
                                    )
                                })
                            }

                                <div className="thefirsthacker-case">
                                    <img src={chatbot}></img>
                                    <span>Chatbot Trainer DAO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
