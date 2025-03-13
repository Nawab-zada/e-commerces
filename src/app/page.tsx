import Image from "next/image";
import Navbar from "./component/view/Navbar/Navbar";
import Hero from "./component/view/hero/Hero";
import Promotions from "./component/view/Promotion";
import Features from "./component/view/Feature";
import Newsletter from "./component/view/Newslatter";

export default function Home() {
  return (
    <div className="">
       <Navbar/>
     <Hero/>
     <Promotions/>
     <Features/>
     <Newsletter/>
     

    </div>
  );
}
