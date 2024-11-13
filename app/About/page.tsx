import React from "react";
import styles from "../About/About.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";


const About =()=>{
   return (
    <div>
      <Header></Header>
   <div className={styles.aboutContainer}>
      <fieldset>
         <legend>Who We Are</legend>
         <h3>We specialize in creating memorable experiences by paying attention to the smallest details With 10+ years in the event planning industry we ensure that every event is executed flawlessly</h3>
      </fieldset>

      <fieldset>
         <legend>Our Mission Statement</legend>
         <h3>What is our business goal Why should clients choose us over others</h3>
         <h2>Our mission is to make your event stress-free and unforgettable no matter the size or scope</h2>
      </fieldset>

      <fieldset>
        <legend>Meet Our Prestige Team</legend>
        <div className={styles.teamSection}>
          <div className={styles.teamMember}>
            <Image src="/images/p1.jpg" alt="Head of Marketing" width={100} height={200} />
            <p>Head of Marketing</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/p3.jpg" alt="CEO" width={100} height={200} />
            <p>CEO</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/p2.jpg" alt="Director of our Board" width={100} height={200}/>
            <p>Director of our Board</p>
          </div>
          <div className={styles.teamMember}>
            <Image src="/images/p4.jpg" alt="Lead of Technical Staff" width={100} height={200} />
            <p>Lead of Technical Staff</p>
          </div>
        </div>
      </fieldset>
      <Footer></Footer>
    </div>
  </div>
  );
};

export default About;
