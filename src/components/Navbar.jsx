import { useState } from "react"
import { assets, navLinksData } from "../assets/assets"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("الرئيسية");
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="relative shadow-xl mb-4 py-3 flex items-center justify-between w-full h-[70px] px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">

    {/* logo */}
      <div>
        <a href="/">
          <img src={assets.logo} alt="logo" className="w-[100px]" />
        </a>
      </div>
      
      {/* Links */}
      <ul className="hidden min-sm:flex items-center gap-4">
        {
          navLinksData.map((link, index) => (
            <li key={index}>
              <a href={link.path}
                onClick={() => { setActiveLink(link.title) }}
                className={`py-2 px-4 hover:bg-[#E9B00A] hover:text-white hover:rounded-md transition-all duration-300 ${activeLink === link.title && "bg-[#E9B00A] text-white rounded-md"}`}>
                {link.title}</a>
            </li>
          ))
        }
      </ul>

  

      {/* Menu For Toggle Menu */}
      <div className="min-sm:hidden">
        <IoMenu className="size-10 cursor-pointer" onClick={() => {setShowLinks((prev) => !prev)}}/>
      </div>

      {/* Show Menu Of Links */}
      <div className={`absolute top-[100%] z-50 min-sm:hidden bg-gray-200 overflow-hidden shadow-xl ${showLinks ? "w-full" : "w-0"} h-auto right-0 py-5 transition-all duration-300`}>
        <ul className="flex flex-col gap-4">
          {
            navLinksData.map((link, index) => (
              <li key={index}>
                <a href={link.path}
                  onClick={() => { setActiveLink(link.title); setShowLinks(false) }}
                  className={`block w-full text-gray-800 font-semibold py-2 px-[3vw] sm:px-[4vw] transition-all duration-300 hover:bg-gray-700 hover:text-white ${activeLink === link.title && "bg-gray-700 text-white" }`}>
                  {link.title}</a>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar