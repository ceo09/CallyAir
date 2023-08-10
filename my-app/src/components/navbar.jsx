import React, { useState } from "react"
import Button from "./button"



const Navbar = () => {
     let Links = [
        {name:"HOME", link:"/"},
        {name:"SERVICES", link:"/"},
        {name:"ABOUT", link:"/"},
        {name:"BLOGS", link:"/"},
        {name:"CONTACT", link:"/"}
     ]
    let [open, setOpen] = useState(false)
    return (
        <>
          <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex-items-center font-[poppins] pl-2">
                    CallyAir
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                <box-icon name={open ? 'x':'menu'}></box-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto 2-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19':'top-[-490px]'}`}>
                    {
                      Links.map((Links)=> (
                        <li key={Links.name} className="md:ml-8 text-lg font-[poppins] md:my-0 my-7">
                        <a href={Links.link} className="text-gray-800 hover:text-gray-400 duration-500">{Links.name}</a>
                        </li>
                     ))
                   }
                   <Button>
                    Get Started
                   </Button>
                </ul>
            </div>
          </div>  
        </>
    )
}
export default Navbar;
