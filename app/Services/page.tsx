import React from "react";
import styles from "../Services/Services.module.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";


const Services=()=>{
   return (
      <div>
         <Header></Header>
      <div className={styles.servicesContainer}>
         <div>
            <h1 className={styles.headingprimary}>Introduction to Our Event Management Services</h1>

            <div>
               <fieldset className={styles.fieldsetContainer}>
                  <legend className={styles.legendStyle}>Introduction to Our Event Management Services</legend>

                  <h3 className={styles.headingSecondary}> we believe every event is a unique opportunity to create unforgettable experiences
                     Whether youre planning an intimate gathering a grand wedding or a corporate conference our team is dedicated to
                     bringing your vision to life with precision creativity and seamless execution With years of experience in the event
                     management industry we specialize in crafting personalized events that exceed expectations From concept to completion
                     we handle every detail with care ensuring your event is stress free and memorable Our commitment to excellence attention 
                     to detail and passion for delivering exceptional results make us the perfect partner for your next event</h3>
               </fieldset>
            </div>
            <div>
               <fieldset className={styles.fieldsetContainer}>
                  <legend className={styles.legendStyle}>What We Offer</legend>
                  <h3 className={styles.headingSecondary}>
                  We offer a full spectrum of event planning services tailored to suit your needs and vision  Whether youre hosting a lavish wedding a professional corporate event or a casual celebration our team is here to guide you every step of the way
                  </h3>
                  <div className={styles.offerList}>
                     
   
                  <div>
                     <li ><strong>Expert Planning & Coordination</strong>: Well help you organize schedule and coordinate all aspects of your event so you dont have to worry about a thing</li>
                  </div>
                  <div  className={styles.themeImageContainer}>
                     <Image src="/images/p6.jpg" alt="Engagement Theme" />
                     <p>Engagement theme</p>
                  </div>
                  </div>
                  <div>
                     <li><strong>Creative Design and Décor</strong>: We bring your ideas to life with stunning designs décor and themes that match your style and make your event one to remember</li>
                  </div>
                  <div className={styles.themeImageContainer}>
                     <Image src="/images/p7.jpeg" alt="Conference Theme" />
                     <p>Conference Theme</p>
                  </div>
                  <div>
                     <li><strong>Stress Free Execution</strong>: Our team manages everything on the day of the event so you can relax and enjoy the moment</li>
                  </div>
                  <div className={styles.themeImageContainer}>
                     <Image src="/images/p5.jpg" alt="Party Theme" />
                     <p>Party Theme</p>
                  </div>
               </fieldset>
            </div>
            <div className={styles.ctaSection}>
               <h1>With Us you get more than just event planning you get a partner who is dedicated to making your event a success from start to finish</h1>
               <p>Lets make your event unforgettable Contact us today</p>
               <a href="#contact">Get in Touch</a>
               
            </div>
         </div>
      </div>
      <Footer></Footer>
      </div>
   )
};

export default Services;