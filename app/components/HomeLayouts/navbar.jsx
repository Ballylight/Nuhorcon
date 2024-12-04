"use client";
import style from "./navbar.module.css";
import logo from "./assets/images/logo.png";
import Image from "next/image";
import { Roboto } from "next/font/google";
import {CButton, CLink, mergeText} from "../addons/addons";
import React from "react";
const noteid = `noteification`;

const font = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["greek"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});


export default function NavBar(props){
  const navref = React.useRef()
  return <div ref={navref} className={style.navbar}>
    <div className={style.navinner}>
      <div className={style.onmobile}>
        <div className={style.left}>
          <Image src={logo} alt="logo" className={style.logo}></Image>
          <div className={style.text}>Pngfitfam</div>
        </div>
        <CButton onClick={()=>{navref.current.classList.toggle(style.showmenu)}} className={style.menubtn}>Menu</CButton>
      </div>
      <div className={style.links}>
        <CLink className={style.link} >Home</CLink>
        <CLink className={style.link} >About</CLink>
        <CLink className={style.link} >Shop</CLink>
        <CLink className={style.link} >Blog</CLink>
        <CLink className={mergeText(style.link,style.linkbutton)} >Contact Us</CLink>
      </div>
    </div>
  </div>


}
