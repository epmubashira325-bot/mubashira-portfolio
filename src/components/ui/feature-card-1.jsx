import React from "react";
import { motion } from "framer-motion";
import "./feature-card.css";

const colorVariants = {
  orange: {
    '--feature-color': 'hsl(35, 91%, 55%)',
    '--feature-color-light': 'hsl(41, 100%, 85%)',
    '--feature-color-dark': 'hsl(24, 98%, 15%)',
  },
  purple: {
    '--feature-color': 'hsl(262, 85%, 60%)',
    '--feature-color-light': 'hsl(261, 100%, 87%)',
    '--feature-color-dark': 'hsl(264, 100%, 15%)',
  },
  blue: {
    '--feature-color': 'hsl(211, 100%, 60%)',
    '--feature-color-light': 'hsl(210, 100%, 83%)',
    '--feature-color-dark': 'hsl(216, 100%, 15%)',
  },
  green: {
    '--feature-color': 'hsl(142, 71%, 45%)',
    '--feature-color-light': 'hsl(142, 71%, 85%)',
    '--feature-color-dark': 'hsl(142, 71%, 15%)',
  }
};

export const AnimatedFeatureCard = React.forwardRef(({ className, index, tag, title, imageSrc, color = "blue", ...props }, ref) => {
  const cardStyle = colorVariants[color] || colorVariants.blue;

  return (
    <motion.div
      ref={ref}
      style={cardStyle}
      className={`feature-card ${className || ''}`}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" },
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      {...props}
    >
      <div
        className="feature-card-bg"
        style={{
          background: `radial-gradient(circle at 50% 30%, var(--feature-color-light) 0%, transparent 70%)`
        }}
      />
      
      <div className="feature-card-index">
        {index}
      </div>

      <motion.div 
        className="feature-card-img-wrapper"
        variants={{
            initial: { scale: 1, y: 0 },
            hover: { scale: 1.15, y: -15 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={tag}
            className="feature-card-img"
          />
        )}
      </motion.div>
      
      <div className="feature-card-content">
        <span
          className="feature-card-tag"
          style={{ 
            backgroundColor: 'var(--feature-color-dark)', 
            color: 'var(--feature-color)',
            border: '1px solid var(--feature-color)'
          }}
        >
          {tag}
        </span>
        <p className="feature-card-title">{title}</p>
      </div>
    </motion.div>
  );
});
AnimatedFeatureCard.displayName = "AnimatedFeatureCard";
