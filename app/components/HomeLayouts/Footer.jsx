
import Image from "next/image"
import { Center, CLink, mergeText } from "../addons/addons"
import style from "./footer.module.css"
import logo from "./assets/images/logo.png";

function Bleftc({icon,children}){
    return <Center className={style.bleftc}>
        <Image src={icon} alt="" className={style.bleftcicon} srcSet="" />
        {children}
    </Center>
}


export default function Footer(props){
    return <Center className={style.footer}>
        <Center className={style.footerinner}>
            <div className={style.footertop}>
                <div className={style.left}>
                    <Image src={logo} alt="logo" className={style.logo}></Image>
                    <div className={style.text}>Nuhorcon</div>
                </div>
                <div className={style.forcemaxwidth}>
                    <div className={style.links}>
                        <CLink className={style.link} >Home</CLink>
                        <CLink className={style.link} >About</CLink>
                        <CLink className={style.link} >Shop</CLink>
                        <CLink className={style.link} >Blog</CLink>
                        <CLink className={mergeText(style.link,style.linkbutton)} >Contact Us</CLink>
                    </div>
                </div>
                {/* <div></div> */}
            </div>
            <div className={style.footerbut}>
                <div className={style.footerbleft}>
                    <Bleftc icon = {""}>pngfitfam.com</Bleftc>
                    <Bleftc icon = {""}>+2348094503658</Bleftc>
                    <Bleftc icon = {""}>Somewhere in the World</Bleftc>
                </div>
                <div className={style.bright}>
                © 2025 Nuhorcon. All rights reserved.
                </div>
            </div>
        </Center>
    </Center>
}