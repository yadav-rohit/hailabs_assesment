"use client";

import Image from "next/image";
import { FaPen , FaUsers ,FaUserTie , FaFontAwesomeFlag ,FaSignOutAlt} from "react-icons/fa";
import React, { useState } from 'react';
import { ImStack } from "react-icons/im";
import Levels from "./components/AccordianItem";



function Menubaritem(props: any) {
  const [active, setactivestate] = React.useState("hexbutton");
  return (
    <div className={`${styles.menubaritems} ${active}`} onClick={
      () => {
        if (active === "hexbutton") {
          setactivestate("hexbuttonactive");
        }
        else {
          setactivestate("hexbutton");
        }
      }
    }>{ props.message}</div>
  )
}
const styles = {
  utils: "p-3 inline-flex gap-2 items-center w-full",
  menubaritems: `bg-[#788DD5]  inline-block px-4 cursor-pointer select-none py-2 focus:text-[#788DD5] focus:bg-white`
}



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:flex-row overflow-hidden">
      <div className="sidebar flex flex-col justify-between md:justify-normal   bg-[#25293A] min-w-[20%] min-h-[100svh] px-4 lg:px-7">
        <section className="dp p-10  text-white text-center flex flex-col items-center gap-3 w-full">
          <div className="picture  rounded-[100%] aspect-square relative w-[90%] ">
            <Image
              className="rounded-full relative border-[0.4rem] border-pink-50"
              src={
                "https://res.cloudinary.com/dbps0dnyv/image/upload/v1685900306/sigmund-jzz_3jWMzHA-unsplash_y16sbk.jpg"
              }
              fill
              loading="lazy"
              alt="women"
            />
            <div
              className="editbutton absolute top-[25%] right-[-10%] bg-[#2E5277] md:text-xs lg:text-md text-white p-4 md:p-2 lg:p-4 rounded-full transition-all ease-in-out duration-200 hover:rotate-12  hover:scale-105"
              title="edit profile Picture"
            >
              <FaPen />
            </div>
          </div>
          <p className="text-center">
          Roopa Nanathan
          <p className="font-light text-slate-200">
            roopa@hailabs.ai
          </p>
          </p>
        </section>
        <section className="menu flex text-md flex-col gap-7 text-white text-center py-7 w-full">
        <div className="filtersection">
        <div id="filter selector" className="p-3 text-white items-center flex">
          <FaUserTie/> &nbsp;
            <select title="effs" >
                <option>My Family Portal</option>
                <option>Parents</option>
                <option>Courses</option>
                {/* <option>React With Headless UI</option> */}
            </select>
        </div>
        <ul id="family member" className="flex flex-col  font-light">
          <li className="text-left p-3">
            <a href="#">AJAY</a>
          </li>
          <li className="flex p-3">
            <a href="#">AJAY</a>
          </li>
          </ul>
          </div>
          <div className="utils flex flex-col items-start ">
          <ul id="utils" className="cursor-pointer">
             <li className={styles.utils}><FaFontAwesomeFlag/>PLans</li>
             <li className={styles.utils}><ImStack/>Projects</li>    
          </ul>
          </div>
          <div className="logout mt-10 flex items-center w-full gap-5">
          <p className="text-start">
          Roopa Nanathan
          <p className="font-light text-slate-200">
            roopa@untitledui.com
          </p>
          </p>
            <FaSignOutAlt className="text-3xl"/>
          </div>
        </section>
      </div>
      <div className="dashboard flex flex-col h-[200vh] w-full ">
        <div className="header flex-col items-center justify-between px-7 py-5 w-full text-white bg-[#8290DD]">
          {/*  </div> The `<div>` element with the `title` attribute set to "Name" is displaying the name "Rohit
          Yadav". The `title` attribute provides additional information about the element when the
          user hovers over it.  */}
          <div title="Name" className=" font-medium text-xl"> Rohit Yadav</div>
          <ul className="menu flex gap-3 p-3 flex-wrap ">
            <li>
              <Menubaritem message="Overview"/>
            </li>
            <li>
            <Menubaritem message="Progress Tracker"/>
            </li>
            <li>
            <Menubaritem message="Certificates"/>
            </li>
            <li>
            <Menubaritem message="Experience Points"/>
            </li>
          </ul>
          </div>
          <div className="levels">
            <Levels level={1} heading="Excitment" Phase={ 
            [
             {
              phasenumber: "01" ,
              heading:"Programing Basics",
              description:"Let's Begin the course with some amazing activities ",
              subheading:"learning starts",
            },
            {
              phasenumber: "02" ,
              heading:"Data Structures",
              description:"This is for Data Structures",
              subheading:"blah blah",
            },
            ]
}/>
<Levels level={2} heading="Learning" Phase={ 
            [
             {
              phasenumber: "01" ,
              heading:"Programing Basics",
              description:"Let's Begin the course with some amazing activities ",
              subheading:"learning starts",
            },
            {
              phasenumber: "02" ,
              heading:"Data Structures",
              description:"This is for Data Structures",
              subheading:"blah blah",
            },
            ]
}/>
          </div>
      </div>
    </main>
  );
}
