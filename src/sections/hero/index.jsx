import React from 'react'
import { motion } from 'framer-motion'
import { framer_desc, framer_icon, framer_title } from './framer'
import scrollAnimation from './lottie_scroll.json'
import Lottie from 'lottie-react'

export const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center flex-1 gap-8">
      <div className="absolute bg-contain w-[100%] top-0 -z-10 opacity-40 h-60 bg-hero-pattern-mobile md:hidden">
        <div className="bg-gradient-to-t from-midnight w-[100%] h-[100%]"></div>
      </div>
      <div className="absolute hidden bg-cover md:block -left-44 h-80 w-80 bg-illustration-hero-left lg:-left-20">
        <div className="bg-gradient-to-r from-midnight w-[100%] h-[100%]"></div>
      </div>
      <div className="absolute hidden bg-cover md:block -right-44 h-80 w-80 bg-illustration-hero-right lg:-right-20">
        <div className="bg-gradient-to-l from-midnight w-[100%] h-[100%]"></div>
      </div>
      <div className="flex flex-col items-center gap-8 p-5 md:max-w-[28.563rem] md:m-auto md:bg-bg-hero-squiggle md:bg-contain bg-no-repeat bg-center ">
        <motion.h1
          {...framer_title}
          className="text-3xl font-bold leading-snug text-center md:text-4xl !mt-[50px]"
        >
          Get Paid for the Work You
          <span className="text-cyan-100"> love</span> to do
          <br />
          As a User, <br/> You’re in 
          <span className="text-cyan-100"> Control </span>
        </motion.h1>
        <motion.p {...framer_desc} className="text-center text-gray text-justify md:w-[600px]">
          You’re the expert, and now it’s time to get rewarded for it! With our
          platform, users like you can find exciting, paid opportunities that
          match your passions and skills. Whether you’re a creative, freelancer,
          or professional, we help you turn your talent into income. Join a
          community of talented users who are working on projects they love,
          building their portfolios, and earning what they deserve—all on their
          own terms. Why Join Us? Tailored Opportunities: Discover projects that
          align with your passions and expertise. Fair Pay: Get compensated
          based on the quality and value of your work. Grow Your Network:
          Connect with other professionals, collaborate, and expand your career.
          It’s time to get paid for doing what you love—because your work
          deserves to be recognized!
        </motion.p>
        <motion.a href="#showcase" className="max-w-[5rem]" {...framer_icon}>
          <Lottie animationData={scrollAnimation} loop={true} />
        </motion.a>
      </div>
    </section>
  )
}
