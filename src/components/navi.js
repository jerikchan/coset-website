import React from "react"
import logo from "../../content/images/hackerhouse/antalpha.svg"
import "./navi.css"
export default (props) => (
  <div className="navi" style={{ ...props.styles, height: `80px` }}>
    <a href="/" target="_self">
                <div className="hackerhouselogo">
                    <img src={logo}
                        alt=""
                        className="Icon"/> 
                    
                </div> 
            </a>
  </div>
 

)