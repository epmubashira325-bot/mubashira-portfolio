import React from "react";
import { motion } from "framer-motion";

export function SplitText({ text, className }) {
  // Parse markdown-style bold text (e.g. "Hello **bold world**")
  const parts = text.split(/(\*\*.*?\*\*)/g);
  const tokens = [];
  
  parts.forEach(part => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const boldWords = part.slice(2, -2).split(" ").filter(w => w.length > 0);
      boldWords.forEach(w => tokens.push({ word: w, isBold: true }));
    } else {
      const normalWords = part.split(" ").filter(w => w.length > 0);
      normalWords.forEach(w => tokens.push({ word: w, isBold: false }));
    }
  });

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {tokens.map((token, index) => (
        <span key={`${token.word}-${index}`} style={{ display: "inline-block", marginRight: "0.25em" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
              delay: index * 0.02, // Stagger effect
            }}
          >
            {token.isBold ? <strong>{token.word}</strong> : token.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default SplitText;
