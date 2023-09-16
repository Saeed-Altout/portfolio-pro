import { motion } from "framer-motion";
import Meeting from "../data/8. Online Meeting.png";
import { dataThinkCommunity } from "../data/dummy";
import { NewFeatures, TitleText, TitleSection } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className="hero flex-center container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex-center lg:flex-row flex-col"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleSection spTitle="Community & Customers" titleStyles="text-left" />
        <TitleText
          title={
            <>
              What's dose <span className="text-gradient"> community </span>
              think of me?
            </>
          }
        />
        <div className="mt-10 flex-center gap-10 flex-wrap">
          {dataThinkCommunity.map((comment) => (
            <NewFeatures key={comment.id} {...comment} />
          ))}
        </div>
      </motion.div>

      <motion.div variants={planetVariants("right")}>
        <img src={Meeting} alt="Meeting" className="w-[600px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
