import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
} & (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>);

const AnimatedButton: React.FC<AnimatedElementProps> = ({ children, className, as = 'button', ...props }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsAnimating(true);
    (props as any).onClick?.(e);
  };

  const pieces = [
    { clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)', x: -50, y: -50, rotate: -15 },
    { clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)', x: 50, y: -50, rotate: 15 },
    { clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)', x: -50, y: 50, rotate: 15 },
    { clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)', x: 50, y: 50, rotate: -15 },
  ];

  const MotionComponent = motion[as];

  return (
    <MotionComponent onClick={handleClick} className={`relative ${className}`} {...props}>
      <AnimatePresence>
        {isAnimating &&
          pieces.map((piece, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: 0,
                x: piece.x,
                y: piece.y,
                rotate: piece.rotate,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              exit={{ opacity: 0 }}
              onAnimationComplete={() => setIsAnimating(false)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                clipPath: piece.clipPath,
                boxShadow: '0 0 20px 10px rgba(255, 165, 0, 0.8)',
                zIndex: 10,
              }}
            >
              <div className={className} style={{ width: '100%', height: '100%' }}>{children}</div>
            </motion.div>
          ))}
      </AnimatePresence>
      {children}
    </MotionComponent>
  );
};

export default AnimatedButton; 