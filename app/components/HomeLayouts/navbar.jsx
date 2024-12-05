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
        <CLink className={style.link} href="/" >Home</CLink>
        <CLink className={style.link} href="/About">About</CLink>
        <CLink className={style.link} href="/Process">Process</CLink>
        <CLink className={style.link} >Shop</CLink>
        <CLink className={style.link} >Blog</CLink>
        <CLink className={mergeText(style.link,style.linkbutton)} >Contact Us</CLink>
      </div>
    </div>
  </div>


}








// "use client";
// import style from "./navbar.module.css";
// import logo from "./assets/images/logo.png";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Hook to get the current route

// export default function NavBar() {
//   const pathname = usePathname(); // Get the current path

//   return (
//     <div className={style.navbar}>
//       <div className={style.navinner}>
//         <div className={style.onmobile}>
//           <div className={style.left}>
//             <Image src={logo} alt="logo" className={style.logo} />
//             <div className={style.text}>Pngfitfam</div>
//           </div>
//         </div>
//         <div className={style.links}>
//           <Link href="/" className={`${style.link} ${pathname === "/" ? style.active : ""}`}>
//             Home
//           </Link>
//           <Link href="/About" className={`${style.link} ${pathname === "/About" ? style.active : ""}`}>
//             About
//           </Link>
//           <Link href="/Process" className={`${style.link} ${pathname === "/Process" ? style.active : ""}`}>
//             Process
//           </Link>
//           <Link href="/shop" className={`${style.link} ${pathname === "/shop" ? style.active : ""}`}>
//             Shop
//           </Link>
//           <Link href="/blog" className={`${style.link} ${pathname === "/blog" ? style.active : ""}`}>
//             Blog
//           </Link>
//           <Link href="/contact" className={`${style.link} ${pathname === "/contact" ? style.active : ""}`}>
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
