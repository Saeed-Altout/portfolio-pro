import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "../utils/motion";
import Work from "../data/1. Work In Desk.png";
import { Text } from "../components/index";
const Hero = () => (
  <section className="hero flex-center container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex-center lg:flex-row flex-col"
    >
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <h1 className="text-white text-5xl leading-tight font-bold text-center lg:text-left">
          👋 Hi, I'm Saeed
          <br />
          <span className="text-gradient">Full-Stack & User Interfaces</span>
          <br />
          Developer
        </h1>
        <Text csStyle="text-center lg:text-left mt-5">
          I develop 3D visuals, User Interfaces and Web Applications. I
          specialize in <span className="text-gradient">React js</span>, Motion,
          Talwindcss, UI/UX Design, Responsive Web Design, and Visual
          Development.
        </Text>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
        <img src={Work} alt="Man Working" className="w-[600px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
