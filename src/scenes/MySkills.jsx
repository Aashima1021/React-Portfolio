import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import skillimg from "../assets/skills-image.png"

const MySkills = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <section id="skills" className="pt-10 pb-24">
        {/* header and image section--- */}
        <div className="md:flex md:justify-between md:gap-16 mt-24 md:pt-36">
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">
              So , basically this is my skill section where you get to know more about my skills and experience i have .
            </p>
          </motion.div>

          <div className="mt-16 md:mt-0">
            {isAboveMediumScreen ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
              >
                <img
                  alt="skills"
                  className="z-10"
                  src={skillimg}
                />
              </div>
            ) : (
              <img
                alt="skills"
                className="z-10"
                src={skillimg}
              />
            )}
          </div>
        </div>


   {/* SKILLS */}
   <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I have make many projects and done internship in two companies on front end web development . I gave my contribution in live projects in both the companies.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am a very Innovative girl. I have made many projects on Html , css , jquery ,
             javascript , node and react . I can give a different look to websites by adding some creativity to them .
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am very good in making UI's . You can have my imaginative skills idea by looking
             on my projects below . Inshort , i can make any UI according to your preferences.
          </p>
        </motion.div>
      </div>


      </section>
    </>
  );
};

export default MySkills;
