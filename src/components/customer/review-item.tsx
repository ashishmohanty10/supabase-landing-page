"use client";
import { motion } from "motion/react";

export const ReviewItem = ({ items }: { items: any }) => {
  return (
    <div className="flex gap-5 w-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="border border-secondary-color rounded-2xl p-5 flex flex-col justify-between hover:border-offWhite/50 duration-75 w-[50rem]"
      >
        <items.main.img className="text-secondary-text" />
        <p className="text-sm text-secondary-text">{items.main.text}</p>
      </motion.div>

      <div className="flex flex-col gap-5">
        {[items.side.image1, items.side.image2].map((ImageComponent, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="border border-secondary-color rounded-2xl p-5 flex items-center justify-center hover:border-offWhite/50 duration-75 w-[20rem]"
          >
            <ImageComponent className="text-secondary-text" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
