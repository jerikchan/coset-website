import React from "react"
import "./footer.css"
import footerlogo from "../../content/images/footer/antalpha.svg"
import notion from "../../content/images/footer/notion.svg"
import youtube from "../../content/images/footer/youtube.svg"
import twitter from "../../content/images/footer/twitter.svg"
import mirror from "../../content/images/footer/mirror.svg"

export default () => (
  <div className="footer">
  <div className="footer-left">
          <div className="footer-logo"><img src={footerlogo}  alt=" "></img></div>
          <div className="footer-text">
              <span>Antalpha Labs is a web3 developer community dedicated to helping developers build open source software to promote innovation and application of web3 technology.</span>
          </div>
  </div>
  <div className="footer-right">
      <a href="https://mirror.xyz/0xeA68d8B403FE1891ae4F309ABeE6D3C9D1089b25"> <img src={mirror} alt=" "></img></a>
      <a href="https://antalpha.notion.site/Antalpha-HackerHouse-13884d3f3d214ed59d430bb472ce523c"><img src={notion} alt=" "></img></a>
      <a href="https://www.youtube.com/channel/UCNFowsoGM9OI2NcEP2EFgrw"><img src={youtube} alt=" "></img></a>
      <a href="https://twitter.com/Antalpha_Labs"> <img src={twitter} alt=" "></img></a>
      <a href="mailto:hello.labs@antalpha.com"> <div className="footer-mail">hello.labs@antalpha.com</div></a>
  </div>
</div>
)