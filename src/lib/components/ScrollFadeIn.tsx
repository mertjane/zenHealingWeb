// ScrollAnimations.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

// Animation variants for different effects
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

/* const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}; */

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Main scroll animation component
interface ScrollAnimationProps {
  children: ReactNode;
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';
  delay?: number;
  duration?: number;
  className?: string;
  margin?: string;
}

export const ScrollAnimation = ({ 
  children, 
  variant = 'fadeUp', 
  delay = 0, 
  duration = 0.8,
  className = "",
  margin = "0px 0px -100px 0px"
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });

  const getVariants = (): Variants => {
    const baseVariant = {
      fadeUp: fadeInUpVariants,
      fadeLeft: fadeInLeftVariants,
      fadeRight: fadeInRightVariants,
      scale: scaleInVariants
    }[variant];

    return {
      hidden: baseVariant.hidden,
      visible: {
        ...baseVariant.visible,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger animation for multiple items
interface StaggerAnimationProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
}

export const StaggerAnimation = ({ 
  children, 
  className = "",
  staggerDelay = 0.2,
  childDelay = 0.1
}: StaggerAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" as any });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childDelay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Individual stagger item component
export const StaggerItem = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Advanced parallax scroll animation
interface ParallaxScrollProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxScroll = ({ children, offset = 50, className = "" }: ParallaxScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" as any }}
    >
      {children}
    </motion.div>
  );
};