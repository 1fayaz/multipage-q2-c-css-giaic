import React from "react";
import styles from "../Contact/contact.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from "../components/Header";
import Footer from "../components/Footer";


function Contact(){
   return(
      <div>
         <Header></Header>
      <div className={styles.contactContainer}>
         <div className={styles.headerSection}>
            <h1 className={styles.mainHeading}>Contact Us</h1>
         </div>
         <div className={styles.introductionSection}>
         <h2>Free Consultation</h2>

         </div>


         <div>
            <p className={styles.introText}>At our management we care for you and your happiness  We are always here to give you outstanding services to make your Dream about your special day come true
               we provides <strong> Free Consultation</strong>  to help you in managing your event So at the time of pressure do not worry just give us a call and we will surely 
               find out solutions for your problems</p>
         </div>
         <div className={styles.contactInfoSection}>
            <ul className={styles.contactList}>
               <li><i className="fa-solid fa-phone"></i>0123-4567891/0</li>
               <li><i className="fa-solid fa-mobile"></i>03124568856</li>
               <li><i className="fa-solid fa-envelope"></i>infoeventmanagmentpkcom</li>
            </ul>
         </div>
         <div className={styles.formSection}>
            <h3 className={styles.formHeading}>Drop Us a Line</h3>
         </div>

         <form className={styles.contactForm} >
            <fieldset className={styles.fieldset}>
               <legend>Your Name</legend>
               <input className={styles.inputField} type="text" />
            </fieldset>

            <fieldset className={styles.fieldset}>
               <legend>Your Email</legend>
               <input className={styles.inputField} type="email" />
            </fieldset>

            <fieldset className={styles.fieldset}>
               <legend>Your Contact Number</legend>
               <input className={styles.inputField} type="number" />
            </fieldset>

            <fieldset className={styles.fieldset}>
               <legend>Your Message</legend>
               <textarea className={styles.textArea} />
            </fieldset>

            <div>
               <button type="submit" className={styles.submitButton}>SEND</button>
            </div>
         </form>

            <div className={styles.mapSection}>
               <h3 className={styles.mapHeading}> Find Us</h3>


            
            <iframe className={styles.mapEmbed} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.16999737747!2d68.28450432523398!3d25.383703648190032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc00bbc183d41e285!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731442069816!5m2!1sen!2s"></iframe>
            
            </div>
            
            <h3>
            Subscribe our Newsletter
            </h3>
            <form action="">

            <fieldset>
               <legend> Your Email</legend>
                  
                  <input className={styles.inputField} type="email" />

                  
            </fieldset> 
         
         
            <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
         </div>
         <Footer></Footer>
      </div>

         
      
   )
};

export default Contact;