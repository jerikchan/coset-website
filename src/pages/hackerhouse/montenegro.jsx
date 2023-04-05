import React from "react";
import Footer from "../../components/footer";
import Navi from "../../components/navi";
import "../global.css";
import "./montenegro.css";

import keyboard from "../../../content/images/hackerhouse/montenegro/keyboard.png";
import schedule from "../../../content/images/hackerhouse/montenegro/schedule.png";
import coding from "../../../content/images/hackerhouse/montenegro/coding.png";

import harry from "../../../content/images/hackerhouse/montenegro/harry.png";
import gigi from "../../../content/images/hackerhouse/montenegro/gigi.png";
import circle from "../../../content/images/hackerhouse/montenegro/circle.png";
import youai from "../../../content/images/hackerhouse/montenegro/youai.png";
import Geoge from "../../../content/images/hackerhouse/montenegro/geoge.png";

import montenegroog from "../../../content/images/og/montenegro.png";

import Carousel from "../../components/carousel/index.js";

import { Seo } from "gatsby-theme-portfolio-minimal";
import SEO from "../../components/SEO/SEO.js";

export default function montenegro() {
  return (
    <>
      <Seo title="Antalpha Labs-Web3 developers community" />
      <SEO
        title="AA-themed HackerHouse"
        description="AA learning materials will be provided before the event, which includes lectures, discussions, and brainstorming sessions for project development."
        image={montenegroog}
      ></SEO>

      {/* 1、这里是导航栏 */}
      <Navi></Navi>

      {/* 报名页面 */}
      <ul className="montenegro montenegro-list">
        <li>
          {/* 第一个页面 */}
          <div className="montenegro_first">
            <div className="montenegro_activity ">
              <div className="montenegro_slogon">Join the Web3 Revolution:</div>
              <div className="montenegro_slogon">
                Register Now for Our AA-themed HackerHouse
              </div>

              <div className="montenegro_detail">
                <span className="montenegro_theme1">#Account Abstraction</span>
                <span className="montenegro_theme2">
                  19th May 2023 - 24th May 2023
                </span>
                <span className="montenegro_theme3">@Podgorica</span>
              </div>
              <a href="">
                <button className="montenegro_button">Coming soon</button>
              </a>
            </div>
          </div>
        </li>
        <li>
          {" "}
          {/* 第二个 */}
          <div className="montenegro_second">
            <div className="montenegro_title">Call for Participants</div>
            <span className="montenegro_content">
              Looking for a unique opportunity to collaborate with like-minded
              individuals on cutting-edge projects in the exciting world of
              <span> Web3</span>? Look no further than our upcoming
              <span>&nbsp;HackerHouse</span> event!
            </span>
          </div>
        </li>
        <li>
          {/* 第三个 */}
          <div className="montenegro_third montenegro-list-item">
            <div className="montenegro_participate montenegro-list-item-text">
              <div className="montenegro_title">Who can participate ?</div>

              <ol className="montenegro_require">
                <li>Programming skills is a must.</li>
                <li>
                  <p>Preferably have participated in the</p>
                  <p>
                    development of <span>Web3</span> and{" "}
                    <span>open-source projects</span>.
                  </p>
                </li>
                <li>
                  <p>Willing to take up challenges in building </p>
                  <p>
                    <span>next-gen AA infra</span> and <span>dapps</span> like
                    the ones
                  </p>
                  <p>below or with your own ideas.</p>
                </li>
              </ol>
            </div>

            {/* 图片 */}
            <div className="keyboard montenegro-list-item-img">
              <img src={keyboard}></img>
            </div>
          </div>
        </li>
        <li>
          {/* 第四个 */}

          <div className="montenegro_fourth montenegro-list-item">
            {/* 图片 */}
            <div className="coding montenegro-list-item-img">
              <img src={coding}></img>
            </div>
            <div className="montenegro_participate montenegro-list-item-text ">
              <div className="montenegro_title montenegro_title2">What are we Looking for ?</div>
              <div className="montenegro-list-item-text--web">
              <p className="montenegro_require"></p>
              <p> During this event, we'll be bringing together the </p>
              <p>brightest minds in Web3 development and researcher </p>
              <p>
                {" "}
                for <span>a week-long</span> deep dive into all things{" "}
                <span>AA</span>.
              </p>
              </div>
              <p className="montenegro-list-item-text--mobile">

               During this event, we'll be bringing together the 
              brightest minds in Web3 development and researcher 
           
                {" "}
                for <span>a week-long</span> deep dive into all things{" "}
                <span>AA</span>.

              </p>
            </div>
          </div>
        </li>
        <li>
          {/* 第五个 */}

          <div className="montenegro_fifth montenegro-list-item">
            <div className="montenegro_participate montenegro-list-item-text">
              <div className="montenegro_title montenegro_title2">Schedule of Events</div>

              <div className="montenegro-list-item-text--web">
                <p>
                  <span>AA learning materials</span> will be provided before the{" "}
                </p>
                <p>
                  {" "}
                  event, which includes <span>
                    lectures, discussions, and
                  </span>{" "}
                </p>
                <p>
                  {" "}
                  <span> brainstorming sessions</span> for project development.{" "}
                </p>
                <p>
                  {" "}
                  Mentors will offer guidance, and a <span>
                    {" "}
                    Demo Day{" "}
                  </span>{" "}
                  with VC{" "}
                </p>
                <p> and industry expert where attendee will showcase </p>
                <p> project outcomes.</p>
              </div>

              <p className="montenegro-list-item-text--mobile">
                <span>AA learning materials</span> will be provided before the{" "}
                event, which includes <span>lectures, discussions, and</span>{" "}
                <span> brainstorming sessions</span> for project development.{" "}
                Mentors will offer guidance, and a <span> Demo Day </span> with
                VC and industry expert where attendee will showcase project
                outcomes.
              </p>
            </div>

            {/* 图片 */}
            <div className="schedule montenegro-list-item-img">
              <img src={schedule}></img>
            </div>
          </div>
        </li>
        <li>
          {/* 第六个 */}
          <div className="montenegro_sixth">
            <div className="statement">
              <div className="montenegro_ideas">Ideas</div>

              <div className="Carousel">
                <Carousel>
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
                      <div className="mobilegap">
                        <p className="character">
                          Transactions will be cached in the pool, and which
                          transaction go first
                        </p>
                        <p className="character">
                          is where MEV take place,there are several teams
                          working on this:
                        </p>

                        <p>
                          <a
                            href="https://github.com/kristofgazso/erc4337-mev-searcher-bot"
                            className="underline character"
                          >
                            https://github.com/kristofgazso/erc4337-mev-searcher-bot
                          </a>{" "}
                        </p>
                        <p>
                          <a
                            href="https://github.com/NethermindEth/mev-aa-geth"
                            className="underline character"
                          >
                            https://github.com/NethermindEth/mev-aa-geth
                          </a>
                        </p>
                      </div>
                      <div className="commentgap">
                        <p>
                          2.Solidity library: different types of contracts for
                          factory, paymaster
                        </p>
                        <div className="mobilegap">
                          <p className="character">
                            There will be different implementations for those
                            contracts to meet different needs. For example for
                            DAOs,{" "}
                          </p>
                          <p className="character">
                            {" "}
                            they may need multi-sign and verify.
                          </p>
                        </div>
                      </div>
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
                      <p>
                        1.Mobile interface improvement for the mass adoption
                      </p>
                      <div className="mobilegap">
                        <p className="character">
                          AA brings mass adoption and what would be better than
                          a seamless mobile app where you won't even notice the
                          gas
                        </p>
                        <p className="character">
                          {" "}
                          fee. A thorough research of the available AA wallet
                          would be essential. eg. Pimlico, Stackup,
                          Candidewallet.{" "}
                        </p>
                        <p className="character">
                          More so by searching on the AA embedded Starkware &
                          Zksync chains.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="commentgap">
                      <p>2.Sub EIP standard for dapps interacting with AA</p>

                      <div className="mobilegap">
                        <p className="character">
                          {" "}
                          It sucks when you try to connect but it shows your
                          dapp does not support such activity, it would cause a
                          lot{" "}
                        </p>
                        <p className="character">
                          {" "}
                          of friction if all dapp come up with their own way
                          each time aa gets updated. So instead if there are
                          some{" "}
                        </p>
                        <p className="character">
                          {" "}
                          standard few lines of could but simple enough for dapp
                          to integrate.
                        </p>
                      </div>
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
                      <p>
                        1.Leverage <span className="underline">EigenLayer</span>{" "}
                        to enable Ethereum's validator to act as Paymaster.
                      </p>
                      <div className="mobilegap">
                        <p className="character">
                          The current plan to prevent a DOS attack from
                          Paymaster is to build a reputation system or have them
                          stake funds{" "}
                        </p>
                        <p className="character">
                          {" "}
                          into the entry point contract, However, this method
                          yields weak trust assumptions and low capital
                          efficiency, why{" "}
                        </p>
                        <p className="character">
                          {" "}
                          not try to leverage re-staking to push the slash-able
                          conditions on to Ethereum's validator so that
                          Paymaster
                        </p>{" "}
                        <p className="character"> can be more trustless.</p>
                      </div>
                    </div>
                    <div className="commentgap">
                      <p>2.How to make AA more chain-agnostic?</p>
                      <div className="mobilegap">
                        <p className="character">
                          One of the advantages that MPC wallet has compared to
                          Multisig wallet is that they are Chain-agnostic. It{" "}
                        </p>
                        <p className="character">
                          {" "}
                          seems like ERC 4337 only stands in an EVM-compatible
                          environment, are there any methods that we can
                        </p>
                        <p className="character">
                          {" "}
                          accomplish chain-agnostic AA?
                        </p>
                      </div>
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
                      <p>1.Security: How to avoid smart contract risk?</p>

                      <ol className="olcharacter">
                        <li>code review/audit </li>
                        <li>permission control mechanisms</li>
                        <li>standardized contract libraries(EIP) </li>
                        <li>
                          avoid excessive reliance on external data(reliable
                          oracle)
                        </li>
                      </ol>
                    </div>
                    <div className="commentgap">
                      <p>2.Composability:</p>
                      <div className="mobilegap">
                        <p className="character">
                          By separating contract logic into multiple modules and
                          managing and combining them through abstract accounts,{" "}
                        </p>{" "}
                        <p className="character">
                          more complex and feature-rich applications can be
                          built, and they can be shared and reused across
                          different{" "}
                        </p>
                        <p className="character"> applications.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="avatar">
                      <img src={Geoge}></img>
                      <div className="name_company">
                        <span>George</span>
                        <span>@Unipass </span>
                      </div>
                    </div>

                    <div>
                      <p>1.Explore different modular architectures. </p>
                      <div className="mobilegap">
                        <p className="character">
                          Implement a different modular architecture;Build
                          modules based on them{" "}
                        </p>
                        <p className="character">
                          e.g, EthDenver2023 finalist{" "}
                          <a
                            href="https://www.rhinestone.wtf/"
                            className="underline"
                          >
                            https://www.rhinestone.wtf/
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="commentgap mobilegap">
                      <p>
                        2.Automated detection of contract and app that are not
                        compatible with Account Abstraction
                      </p>
                      <p className="character"> (public good)</p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </li>
        <li>
          {" "}
          {/* 第七个 */}
          <div className="montenegro_seventh">
            <div className="montenegro_seventh_content">
              <p>
                Whether you're an experienced Web3 developer looking to push the
                limits of what's possible, or a curious{" "}
              </p>
              <p>
                {" "}
                researcher eager to explore new possibilities, our HackerHouse
                event is the perfect place to take your{" "}
              </p>{" "}
              <p> skills to the next level.</p>
              <p className="margingap">
                So why wait? Sign up today and be part of the future of Web3!
              </p>
              <div className="mon_vector">
                <div className="vertical"></div>
                <div className="incline"></div>
              </div>
              <button className="montenegro_button">Coming soon</button>
            </div>
          </div>
        </li>
      </ul>
      <Footer></Footer>
    </>
  );
}
