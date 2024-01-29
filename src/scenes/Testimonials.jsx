import React from 'react'
import {motion} from "framer-motion"
import LineGradient from '../components/LineGradient'

const Testimonials = () => {
  return (
  <>
      <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work and their experience with me . You can have a look on it .
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="testimonial-data mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-7 sm:p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
           She is a very kind and enthusiastic girl . She take all her work serious and do it in a very professional way .
          </p>
        </motion.div>

        <motion.div
          className="testimonial-data mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-7 sm:p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl pt-7">
          She is a very soft-hearted and enthusiastic girl . She take all her work serious and do it in a very professional way .
          </p>
        </motion.div>

        <motion.div
          className="testimonial-data mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-7 sm:p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
          She is a very kind and enthusiastic girl . She take all her work serious and do it in a very professional way .
          </p>
        </motion.div>
      </div>
    </section>
  </>
  )
}

export default Testimonials
