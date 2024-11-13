import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css'
import styles from "./footer.module.css"
import Link from "next/link";


const Footer=()=>{
   return(
      
      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <h2 id="h2q">Quick Links</h2>
            <ol className={styles.fol}>
               <li><a><Link href="/"></Link><i className="fas fa-home"></i>Home</a></li>
               <li><a><Link href="/Services"></Link><i className="fas fa-cogs"></i>Services</a></li>
               <li><a><Link href="/About"></Link><i className="fas fa-info-circle"></i>About Us</a></li>
               <li><a><Link href="/Contact"></Link><i className="fas fa-envelope"></i>Contact Us</a></li>
            </ol>

         </div>
      </footer>
   
   )
}

export default Footer;