import { motion } from "framer-motion";
import Calendar from "../data/4. Man With Calendar.png";
import { dataServices } from "../data/dummy";
import { TitleText, TitleSection, NewServices } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className="hero flex-center container mx-auto px-3 sm:px-0">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TitleSection
          bTitle="Our "
          spTitle="Services"
          titleStyles="text-center"
        />
        <TitleText
          title={
            <>
              What Services do we provide to
              <span className="text-gradient"> Clients?</span>
            </>
          }
          textStyles="text-center leading-tight"
        />
      </motion.div>
      <div className="mt-20 grid-section">
        {dataServices.map((service) => (
          <NewServices key={service.id} {...service} />
        ))}
      </div>
      <motion.div variants={planetVariants("right")} className="w-full">
        <img src={Calendar} alt="Meeting" className="w-[600px] mx-auto" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
