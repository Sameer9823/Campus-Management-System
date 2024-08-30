import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
// import CreateEventForm from "./Components/Eventcreation";

export default function Home() {
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <br />
    
    <HeroSection/>
  
    <Footer/>
    </>
  );
}
