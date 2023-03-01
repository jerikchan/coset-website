import React from "react";
import { Link } from "gatsby"

import Footer from "../components/footer"
import "./global.css";
import "./indexpage.css";
import logo from "../../content/images/antalpha/antalphalogo.svg"
import logo2 from "../../content/images/antalpha/antalphalogo2.svg"
import nextpage from "../../content/images/hackerhouse/nextpage.png"
import mianlogo from "../../content/images/antalpha/mainlogo.svg"
import {Seo} from "gatsby-theme-portfolio-minimal";

import check from "../../content/images/antalpha/check.svg"
import arrow from "../../content/images/antalpha/arrow-up-right.svg"
import chatbot from "../../content/images/antalpha/chatbot.jpg"
import geolink from "../../content/images/antalpha/geolink.png"
import produceart from "../../content/images/antalpha/produceart.png"
import didmove from "../../content/images/antalpha/didmove.png"
import dagora from "../../content/images/antalpha/dagora.png"
import lunswap from "../../content/images/antalpha/lunswap.png"
import graphene from "../../content/images/antalpha/graphene.png"
import daospacenft from "../../content/images/antalpha/daospacenft.png"
import daoverselink from "../../content/images/antalpha/daoverselink.png"
import owlad from "../../content/images/antalpha/owlad.png"
import meow from "../../content/images/antalpha/meow.png"

import dog from "../../content/images/antalpha/dog.jpg"
import join3 from "../../content/images/antalpha/join3.jpg"
import zkdoge from "../../content/images/antalpha/zkdoge.png"
import wedo from "../../content/images/antalpha/wedo.png"
import DB3 from "../../content/images/antalpha/DB3.png"
import GIT3 from "../../content/images/antalpha/GIT3.png"
import Tokhub from "../../content/images/antalpha/Tokhub.png"
import upgradedoge from "../../content/images/antalpha/upgradedoge.jpg"


import arrow2 from "../../content/images/antalpha/arrow-up-right -blue.svg"
import arrow3 from "../../content/images/antalpha/arrow-up-right -white.svg"

export default function IndexPage() {
    const imglist = [
        {
            id: '1',
            projectlink: 'https://hackerhouses.notion.site/Chatbot-Trainer-DAO-e4d3e2787c6d4dd18b4914332e04c169',
            imgurl: chatbot,
            text: 'Chatbot Trainer DAO'
        },
        {
            id: '2',
            projectlink: 'https://hackerhouses.notion.site/DAO-Space-NFT-Pass-eff16e60221c4d71b2da0a92778b37b2',
            imgurl: daospacenft,
            text: 'DAO Space NFT Pass'
        },
        {
            id: '3',
            projectlink: 'https://hackerhouses.notion.site/dAgora-4c9cef54885844faa7f1daa550b61497',
            imgurl: dagora,
            text: 'dAgora 协同写作'
        },
        {
            id: '4',
            projectlink: 'https://hackerhouses.notion.site/Graphene-25cef4dd00f74d7ea5b21904afbdebcd',
            imgurl: graphene,
            text: 'Graphene云钱包'
        }, {
            id: '5',
            projectlink: 'https://hackerhouses.notion.site/LunSwap-b1f6a55bf7dd45e78b200e7fb1948cf6',
            imgurl: lunswap,
            text: 'LUNSWAP'
        }, {
            id: '6',
            projectlink: 'https://hackerhouses.notion.site/MOVE-DID-19fbe4cba1cb4f82b302b06fe7836071',
            imgurl: didmove,
            text: 'Move DID'
        }, {
            id: '7',
            projectlink: 'https://hackerhouses.notion.site/GA-06a9da2ff00c4483a11695427b1b615c',
            imgurl: produceart,
            text: 'GA生成艺术首发平台'
        }, {
            id: '8',
            projectlink: 'https://hackerhouses.notion.site/Geolink-5968bae0e3e84b609ed6d402976b4f5c',
            imgurl: geolink,
            text: 'GeoLink'
        }, {
            id: '9',
            projectlink: 'https://hackerhouses.notion.site/DAOVerse-005cd13de6194eff9963de6e7d9246b5',
            imgurl: daoverselink,
            text: 'DAOVERSE.link'
        }, {
            id: '10',
            projectlink: 'https://hackerhouses.notion.site/e61a580f5886494ebe3f441807970f63',
            imgurl: owlad,
            text: 'AD DELIVERY METHODS'
        }, {
            id: '11',
            projectlink: 'https://hackerhouses.notion.site/Meow-Metaverse-a47c6c542e964c4d9e694ca2fcc1dfd6',
            imgurl: meow,
            text: 'Meow Metaverse'
        }
    ]
    const img2list = [
        {
            id: '1',
            projectlink: 'https://www.notion.so/join3-22f2097738b84589aa9e857043ac7531',
            imgurl: join3,
            text: 'join3协作图谱'
        },
        {
            id: '2',
            projectlink: 'https://www.notion.so/ZK-Doge-Airdrop-Protocol-7fdaed22c4bf4671ab26280e0b061fb4',
            imgurl: zkdoge,
            text: 'ZK-Doge Airdrop Protocol'
        },
        {
            id: '3',
            projectlink: 'https://www.notion.so/Db3-Network-34cbb345331746e3b4e6197fc619fe69',
            imgurl: DB3,
            text: '去中心化数据库DB3'
        },
        {
            id: '4',
            projectlink: 'https://www.notion.so/DAO-WeDo-e9ccc44999d746e58c817c07a32aa479',
            imgurl: wedo,
            text: 'WeDo-DAO工具'
        }, 
         {
            id: '5',
            projectlink: 'https://www.notion.so/Upgrade-Doge-upgradeable-smart-contract-toolkit-5c7f4bed24dc45d69ac64436cf463006',
            imgurl:upgradedoge,
            text: 'Smart Contract Toolkit'
        },
         {
            id: '6',
            projectlink: 'https://www.notion.so/Tokhub-Carta-for-Web3-41074f2cda714006bb7441159cace007',
            imgurl: Tokhub,
            text: 'Tokhub:Carta for Web3'
        }, {
            id: '7',
            projectlink: 'https://www.notion.so/GitHub-934a2b4c700f41ea9d9d4868770eff81',
            imgurl: GIT3,
            text: '去中心化的GitHub'
        },{
            id: '8',
            projectlink: 'https://www.notion.so/DAO-Plugins-based-on-Github-71dd5b41e78f42e295357bd535b05f79',
            imgurl: dog,
            text: 'DAO Plugins on GitHub'
        }
    ]



    let arrowImg = arrow
    const viewAllOnchange = (type) => {
        if (type = "focus") {
            arrowImg = arrow2
        } else if (type = "click") {
            arrowImg = arrow3
        }
    }
    return (
        <>
            <Seo title="Antalpha Labs-Web3 developers community"/> {/* 1、首页 */}
            <div className="antalpha-container">
                {/* 顶部导航 */}
                <div className="antalpha-container1">
                    <div className="antalpha-navigator">
                        <a href="/" target="_self">
                            <div className="antalpha-logo">
                                <img src={logo}
                                    alt=""
                                    className="Icon1"/>
                                <img src={logo2}
                                    alt=""
                                    className="Icon2"/>
                            </div>
                        </a>
                        <div className="antalpha-navi">
                            {/* <a href="https://labs.antalpha.com/hackerhouse" className="hackerhouse-navi"> */}
                               <Link to="/hackerhouse" className="hackerhouse-navi">
                                <span>HackerHouse</span>
                                <div className="line"></div>
                                </Link>
                            {/* </a> */}
                            <a href="#showcase" className="showcase-navi">
                                <span>Showcase</span>
                                <div className="line"></div>
                            </a>
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
                        <a href="https://discord.gg/5VDVhY6czv">
                            <button className="botton">Join us</button>
                        </a>
                    </div>

                    <a href="#aboutus" className="nextpage">
                        <img src={nextpage}
                            alt=""></img>
                    </a>
                </div>

                {/* 2、关于我们 */}
                <div id="aboutus">
                    <div className="antalpha-containe1">
                        <div className="about-antalpha">
                            <div className="about-antalpha-box">
                                <div className="antalpha-title antalpha-bigtitle">About Antalpha Labs</div>
                                <div className="antalpha-title antalpha-detailintro">Antalpha Labs is a web3 developer community dedicated to helping developers build open source software to promote innovation and application of web3 technology.</div>
                                <div className="antalpha-title antalpha-aboutus">We are here to:</div>
                                <ul className="antalpha-title antalpha-aboutuslist">
                                    <li>
                                        <img src={check}
                                            alt=""></img>Learn web3 technology.</li>
                                    <li>
                                        <img src={check}
                                            alt=""></img>Build open source projects.</li>
                                    <li className="check3">
                                        <img src={check}
                                            alt=""></img>Support open source projects by grant and user growth strategy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3、案例 */}
                <div id="showcase">
                    <div className="antalpha-showcase">
                        <div className="showcase-title">
                            <div>Showcase</div>
                            <a className="viewALl-href" href="https://antalpha.notion.site/">
                                <button className="botton viewall-button"
                                    onFocus={
                                        () => viewAllOnchange("focus")
                                    }
                                    onClick={
                                        () => viewAllOnchange("click")
                                }>View all {/*arrowImg*/}
                                    {/* <img src={arrow} alt="" className="arrow" ></img>  */}
                                    <div className="viewAll-arrow"></div>
                                </button>
                            </a>
                        </div>
                        <div className="showcase-cutline"></div>
                        <div className="showcase-scroll">

                        <div className="showcase-list2">
                                {
                                img2list.map(({
                                    projectlink,
                                    text,
                                    imgurl
                                }, idx) => {
                                    return (
                                        <div className="thefirsthacker-case"
                                            key={
                                                text + idx
                                        }>
                                            <a href={projectlink}
                                                className=" thefirsthacker-linkcase"
                                                hidefocus="true">
                                                <img src={imgurl}
                                                    className="case-photo"
                                                    alt=""/>

                                                <span>{text}</span>
                                            </a>
                                        </div>
                                    )
                                })
                            } </div>
                        <div className="showcase-list">
                                {
                                imglist.map(({
                                    projectlink,
                                    text,
                                    imgurl
                                }, idx) => {
                                    return (
                                        <div className="thefirsthacker-case"
                                            key={
                                                text + idx
                                        }>
                                            <a href={projectlink}
                                                className=" thefirsthacker-linkcase"
                                                hidefocus="true">
                                                <img src={imgurl}
                                                    className="case-photo"
                                                    alt=""/>

                                                <span>{text}</span>
                                            </a>
                                        </div>
                                    )
                                })
                            } </div>
                      
                        
                        </div>
                    </div>
                </div>
                    {/* 4、footer */}


                    <Footer></Footer>
          


            </div>

        </>
    );
}
