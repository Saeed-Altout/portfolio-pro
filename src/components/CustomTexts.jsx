import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "../utils/motion";
const Text = (props) => {
  return (
    <p className={`text-gray-400 text-sm md:text-lg ${props.csStyle}`}>
      {props.children}
    </p>
  );
};
const TextImportant = (props) => {
  return <span className="font-extrabold text-gradient">{props.children}</span>;
};
const TitleSection = ({ bTitle, aTitle, spTitle, titleStyles }) => (
  <motion.p
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`text-4xl font-semibold text-gray-200 ${titleStyles}`}
  >
    {bTitle} <span className="text-gradient font-bold">{spTitle}</span> {aTitle}
  </motion.p>
);
const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-5 font-bold text-6xl text-gray-200 leading-tight ${textStyles}`}
  >
    {title}
  </motion.h2>
);
export { TitleText, Text, TextImportant, TitleSection };
