import React from "react";
import styles from "./Header.module.css"
import Link from "next/link";
import Image from "next/image";



const Header=()=>{
   return(
      <nav className={styles.nav}>
       <Image src="/images/p8.png" alt="logo" width={160} height={95} />
       <div className={styles.heading}>
         <h1>Planning Perfect Events Every Time</h1>
       </div>

       <div className={styles.navmenu}>
        <Link href="/">Home</Link>
        <Link href="/Services">Our Services</Link>
        <Link href="/About" >About Us </Link>
        <Link href="/Contact">Contact Us</Link>
       </div>
      </nav>
   )
};

export default Header;







