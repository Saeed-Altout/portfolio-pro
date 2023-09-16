"use client";

import { motion } from "framer-motion";
import map from "../data/map.png";
import people1 from "../data/people-01.png";
import people2 from "../data/people-02.png";
import people3 from "../data/people-03.png";
import { TitleText, TitleSection } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className="hero flex-center container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TitleSection
        bTitle="People on the"
        spTitle={`World`}
        titleStyles="text-center"
      />

      <TitleText
        title={
          <>
            Track friends around you and invite them to{" "}
            <span className="text-gradient"> play together</span> in the same
            world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative w-full mt-20"
      >
        <img src={map} alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={people1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={people2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={people3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
