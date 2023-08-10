import React from "react";
import headerImage from "./headerImage.png"


const Header = () => {
    return (
    <>
        <div className="w-full bg-white h-[620px]">
            <div className="">
            <div className="container md:flex md:flex-row align-middle justify-center flex flex-col-reverse">
                <div className="md:mt-32 text-left p-10 font-[poppins]  text-black md:w-[600px] md:h-[300px] ease-in duration-3000">
                   <h1 className="md:text-5xl text-indigo-800  font-bold pt-10  text-lg">Travel to Your Dream Destination Today</h1> 
                   <p className="md:pt-10 pt-5 md:text-lg text-sm text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt quod obcaecati quam cum natus eum quo provident error minima tempora quibusdam aliquam labore odio quisquam at voluptate a ab, vel est reprehenderit voluptates adipisci ea ut nostrum! Iste, a iure.</p>
                </div>
                <div className="mt-32">
                 <img className="md:w-[500px] md:h-[500px] w-[300px] h-[300px]" src={headerImage} alt="Traveling bag" />
                </div>
            </div>
         </div>
        </div>
    </>
    )
}
export default Header;