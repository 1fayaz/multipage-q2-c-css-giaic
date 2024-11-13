import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./Contact/page";
import Services from "./Services/page";
import About from "./About/page";


const Page= ()=>{
  return (
    <div>
        <Header></Header>
       <About></About>
       <Services></Services>
       <Contact></Contact>
        <Footer></Footer>
    </div>
  )
};

export default Page;