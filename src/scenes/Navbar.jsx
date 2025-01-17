import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import mobileiconImg from '../assets/menu-icon.svg'
import mobileiconClose from  '../assets/close-icon.svg'
import {motion} from "framer-motion";






const Navbar = ({ isTopOfPage , selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? " " : "bg-red" ;


  const Link = ({ page, selectedPage, setSelectedPage  }) => {
  
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-yellow" : ""
        } hover:text-yellow transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => {{setSelectedPage(lowerCasePage)
        setIsMenuToggled(false)};
       }}
      >
        {page}
      </AnchorLink>
    );
  };


  return (
    <>
      <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold">AB</h4>

    {/* Desktop navigation bar:--- */}
{isDesktop? (
<div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          )
:
(
    <button
    className="rounded-full bg-red p-2"
    onClick={() => setIsMenuToggled(!isMenuToggled)}
  >
    <img alt="menu-icon" src={mobileiconImg} />
  </button>
)}

     {/* mobile menu code... */}
{!isDesktop && isMenuToggled && (

    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px] ">
    <motion.div      
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{  duration: 0.3 }}
  variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }}
  className="basis-1/2 mt-10 md:mt-0">

        <div className="flex justify-end p-12 ">
            <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <img src={mobileiconClose} alt='menu-closed'/>
            </button>
        </div>


        {/* menu items */}
        
        
        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            </motion.div>
    </div>
   
)}



        </div>
      </nav>
    </>
  );
};

export default Navbar;
