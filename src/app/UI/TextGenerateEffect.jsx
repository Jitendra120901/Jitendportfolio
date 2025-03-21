"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 3,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
            <motion.span
              className={`${className} opacity-0`}
            >
              {words}{" "}
            </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="">
        <div className={className}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
