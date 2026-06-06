import React from "react";
import { motion } from "framer-motion";

const Quote = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-[8vw] flex items-center my-[8vw]">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: "url('/images/QuoteBanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[85vw] mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="max-w-[55vw]"
        >
          <h2 className="text-[3vw] lg:text-[2.2vw] font-bold text-[#ffffff] md:text-[1.8vw]">
            “We have created an environment ideal for building craft. Our goal
            is to be recognised as the best tennis performance centre in the
            world.”
          </h2>

          <hr className="bg-black my-[2vw]" />
          <div className="">
            <p className="text-[1vw] font-semibold text-white">John Doe</p>

            <span className="text-[0.8vw] text-white/80">chairman</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Quote;
