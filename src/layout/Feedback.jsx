import React from "react";
import Promotion from "../data/6. Promotion.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Feedback = () => (
  <section className="hero flex-center flex-col  container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex-center flex-col lg:flex-row"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="gradient-05 p-8 rounded-3xl border-[1px] border-[#6a6a6a] relative flex-[50%]"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold text-3xl text-gray-200">Samantha</h4>
          <p className="font-medium text-sm text-gray-200 mt-2">
            Founder Info Pro
          </p>
        </div>
        <p className="font-medium text-lg text-gray-400 mt-2">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>

      <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
        <img src={Promotion} alt="Promotion" className="w-[600px] mx-auto" />
      </motion.div>
    </motion.div>
    <div className="mt-20">
      <form className="w-full flex-center flex-wrap gap-5">
        <input
          className="w-full flex-[40%] bg-transparent text-lg border-[1px] text-gray-200 border-gray-600 rounded-lg py-3 px-5 placeholder:text-gray-400"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full flex-[40%] bg-transparent text-lg border-[1px] text-gray-200 border-gray-600 rounded-lg py-3 px-5 placeholder:text-gray-400"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full flex-[100%] bg-purple-500 text-lg text-gray-200 cursor-pointer rounded-lg py-3 px-5 "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  </section>
);

export default Feedback;
