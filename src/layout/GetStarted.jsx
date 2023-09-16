import { motion } from "framer-motion";
import { startSteps } from "../data/dummy";
import { StartSteps, TitleText, TitleSection } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import Startup from "../data/9. Startup.png";
const GetStarted = () => (
  <section className="hero flex-center container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="text-left flex flex-col lg:flex-row"
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[50%]"
      >
        <TitleSection
          bTitle="How"
          spTitle={`Info Pro`}
          aTitle="Works"
          titleStyles="text-left"
        />
        <TitleText
          title={
            <>
              Get started with <span className="text-gradient">Info Pro</span>{" "}
              just do a few clicks
            </>
          }
        />
        <div className="flex flex-col gap-5 mt-5">
          {startSteps.map((step, index) => (
            <StartSteps
              key={step}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              text={step}
            />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants("right")} className="flex-[50%]">
        <img src={Startup} alt="get-started" className="w-[600px] mx-auto" />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
