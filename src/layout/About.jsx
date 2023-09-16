import { motion } from "framer-motion";
import { TitleSection, TextImportant } from "../components/index";
import Prsentation from "../data/3. Prsentation.png";
import { fadeIn, staggerContainer } from "../utils/motion";
const About = () => (
  <section className="hero flex-center container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TitleSection
        bTitle="Welcome In"
        spTitle="My Portfolio"
        aTitle=""
        titleStyles="text-center"
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="text-gray-400 text-sm md:text-lg text-center mt-5  w-[80%] mx-auto"
      >
        On this Page <TextImportant>Portfolio</TextImportant> I will show you
        some information about myself, my business, my portfolio , and some
        projects that I have worked on, I wish you
        <TextImportant> a good and happy journey</TextImportant> in our simple
        website
      </motion.p>
      <img src={Prsentation} alt="Prsentation" className="w-[600px] mx-auto" />
    </motion.div>
  </section>
);

export default About;
