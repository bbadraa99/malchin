import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";
import { FaArrowCircleDown } from "react-icons/fa";
import Link from "next/link";


export default function App() {

  return (
    <div>
      <Navbar />
      <FrontPage/>
      <SecondPage />
      <div className="flex flex-col gap-5 center pt-10 bg-white pb-40 pt-40">
          <FaArrowCircleDown className="text-background-10" size="72px"/>
          <p className="bold-32 lg:bold-46 font-spartan text-background-10 pt-20 text-center">Start your first nomadic journey here!</p>
          <Link href="/sign-up"><button  className="btn font-spartan text-white bg-background-10 regular-24 border-background-10 hover:border-background-10 hover:bg-white hover:text-background-10">Sign up</button></Link>
      </div>
      <Footer/>
    </div>
    
  );
}
