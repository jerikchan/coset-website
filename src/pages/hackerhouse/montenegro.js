import React from "react"
import Footer from "../../components/footer"
import Navi from "../../components/navi"
import "../global.css";
import "./montenegro.css";

import keyboard from "../../../content/images/hackerhouse/montenegro/keyboard.png"
import schedule from "../../../content/images/hackerhouse/montenegro/schedule.png"
import coding from "../../../content/images/hackerhouse/montenegro/coding.png"

import harry from "../../../content/images/hackerhouse/montenegro/harry.png"
import gigi from "../../../content/images/hackerhouse/montenegro/gigi.png"
import circle from "../../../content/images/hackerhouse/montenegro/circle.png"
import youai from "../../../content/images/hackerhouse/montenegro/youai.png"

import Swipper from "../../components/swipper/index.js"
import Carousel from '../../components/carousel/index.js';

import {Seo} from "gatsby-theme-portfolio-minimal";

export default function montenegro() {

    return (
        <>

            <Seo title="Antalpha Labs-Web3 developers community"/> {/* 1、这里是导航栏 */}
            <Navi></Navi>

            {/* 报名页面 */}

            <div className="montenegro">

                {/* 第一个页面 */}
                <div className="montenegro_first">
                    <div className="montenegro_activity ">
                        <div className="montenegro_slogon">Join the Web3 Revolution:</div>
                        <div className="montenegro_slogon">Register Now for Our AA-themed HackerHouse</div>

                        <div className="montenegro_detail">
                            <span className="montenegro_theme">#Account Abstraction</span>
                            <span className="montenegro_theme">19th May 2023 - 24th May 2023</span>
                            <span className="montenegro_theme">@Podgorica</span>
                        </div>
                        <a href="">
                            <button className="montenegro_button">Coming soon</button>
                        </a>
                    </div>

                </div>

                {/* 第二个 */}
                <div className="montenegro_second">

                    <div className="montenegro_title">Call for Participants</div>
                    <span className="montenegro_content">Looking for a unique opportunity to collaborate with like-minded 
                                                                                                                                                                                    individuals on cutting-edge projects in the exciting world of Web3? Look no further than our upcoming
                                                                                                                                                                HackerHouse event!
                    </span>

                </div>


                {/* 第三个 */}
                <div className="montenegro_third">
                    <div className="montenegro_participate">
                        <div className="montenegro_title">Who can participate ?</div>

                        <ol className="montenegro_require">
                            <li>Programming skills is a must.</li>
                            <li>Preferably have participated in the development of Web3 and open-source projects.</li>
                            <li>Willing to take up challenges in building next-gen AA infra and dapps like the ones below or with your own ideas.</li>
                        </ol>

                    </div>

                    {/* 图片 */}
                    <div>         
                            <img src={keyboard} className="keyboard"></img>                
                    </div>

                </div>


                {/* 第四个 */}
       
                <div className="montenegro_fourth">
                        {/* 图片 */}
                        <div>         
                            <img src={coding}></img>                
                    </div>
                    <div className="montenegro_participate">
                        <div className="montenegro_title">What are we Looking for ?</div>
                        <p>During this event, we'll be bringing together the brightest minds in Web3 development and researcher for a week-long deep dive into all things AA.</p>
                    </div>
                </div>


                {/* 第五个 */}
          
                    <div className="montenegro_fifth">
                    <div className="montenegro_participate">
                        <div className="montenegro_title">Schedule of Events</div>
                        <p>AA learning materials will be provided before the event, which includes lectures, discussions, and brainstorming sessions for project development. Mentors will offer guidance, and a Demo Day with VC and industry expert where attendee will showcase project outcomes.</p>
                    </div>

                    {/* 图片 */}
                    <div>         
                            <img src={schedule}></img>                
                    </div>

                </div>


                {/* 第六个 */}
                <div className="montenegro_sixth">

                    <div className="statement">
                        <div className="montenegro_ideas">Ideas</div>
                 
                                <div className='Carousel'>
                                    <Swipper>
                                    <div>
                            <div className="avatar">
                                <img src={harry}></img>
                                <div className="name_company">
                                    <span>Harry</span>
                                    <span>@Antalpha Labs</span>
                                </div>
                            </div>

                            <div>
                                <p>1.Decentralized bundler network</p>
                                <p>Transactions will be cached in the pool, and which transaction go first is where MEV take place, there are several teams working on this:
                                </p>
                                <p>https://github.com/kristofgazso/erc4337-mev-searcher-bot</p>
                                <p>https://github.com/NethermindEth/mev-aa-geth</p>
                            </div>
                            <div>
                                <p>2.Solidity library: different types of contracts for factory, paymaster</p>
                                <p>There will be different implementations for those contracts to meet different needs. For example for DAOs, they may need multi-sign and verify.</p>
                            </div>
                        </div>

                        <div>
                            <div className="avatar">
                                <img src={gigi}></img>
                                <div className="name_company">
                                    <span>Gigi</span>
                                    <span>@Antalpha Labs</span>
                                </div>
                            </div>

                            <div>
                                <p>1.Decentralized bundler network</p>
                                <p>Transactions will be cached in the pool, and which transaction go first is where MEV take place, there are several teams working on this:
                                </p>
                                <p>https://github.com/kristofgazso/erc4337-mev-searcher-bot</p>
                                <p>https://github.com/NethermindEth/mev-aa-geth</p>
                            </div>
                            <div>
                                <p>2.Solidity library: different types of contracts for factory, paymaster</p>
                                <p>There will be different implementations for those contracts to meet different needs. For example for DAOs, they may need multi-sign and verify.</p>
                            </div>
                        </div>

                        <div>
                            <div className="avatar">
                                <img src={circle}></img>
                                <div className="name_company">
                                    <span>Circle</span>
                                    <span>@Antalpha Venture</span>
                                </div>
                            </div>

                            <div>
                                <p>1.Decentralized bundler network</p>
                                <p>Transactions will be cached in the pool, and which transaction go first is where MEV take place, there are several teams working on this:
                                </p>
                                <p>https://github.com/kristofgazso/erc4337-mev-searcher-bot</p>
                                <p>https://github.com/NethermindEth/mev-aa-geth</p>
                            </div>
                            <div>
                                <p>2.Solidity library: different types of contracts for factory, paymaster</p>
                                <p>There will be different implementations for those contracts to meet different needs. For example for DAOs, they may need multi-sign and verify.</p>
                            </div>
                        </div>

                        <div>
                            <div className="avatar">
                                <img src={youai}></img>
                                <div className="name_company">
                                    <span>Youai</span>
                                    <span>@Antalpha</span>
                                </div>
                            </div>

                            <div>
                                <p>1.Decentralized bundler network</p>
                                <p>Transactions will be cached in the pool, and which transaction go first is where MEV take place, there are several teams working on this:
                                </p>
                                <p>https://github.com/kristofgazso/erc4337-mev-searcher-bot</p>
                                <p>https://github.com/NethermindEth/mev-aa-geth</p>
                            </div>
                            <div>
                                <p>2.Solidity library: different types of contracts for factory, paymaster</p>
                                <p>There will be different implementations for those contracts to meet different needs. For example for DAOs, they may need multi-sign and verify.</p>
                            </div>
                        </div>

                                       
                                    </Swipper>
                                </div>
                    




                    </div>

                 </div>


                {/* 第七个 */}
                <div className="montenegro_seventh">
                    <div className="montenegro_seventh_content">
                        <p>Whether you're an experienced Web3 developer looking to push the limits of what's possible, or a curious researcher eager to explore new possibilities, our HackerHouse event is the perfect place to take your skills to the next level.</p>
                        <p>So why wait? Sign up today and be part of the future of Web3!</p>
                        <div className="mon_vector"></div>
                        <button className="montenegro_button">Coming soon</button>
                    </div>
                </div>


            </div>

            <Footer></Footer>


        </>
    );
}
