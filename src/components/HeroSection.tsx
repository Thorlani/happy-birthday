import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const titleVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const wordVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  } as const;

  // const wordVariants = {
  //   hidden: { opacity: 0, y: 60, rotateX: -20 },
  //   visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
  // };

  return (
    <section className="hero" ref={ref}>
      {/* Parallax background image */}
      <motion.div className="hero__bg" style={{ y: imgY }}>
        <img
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1800&q=80"
          alt="Romantic background"
        />
        <div className="hero__overlay" />
      </motion.div>

      {/* Floating particles */}
      <div className="hero__particles">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="particle" style={{ '--i': i } as React.CSSProperties} />
        ))}
      </div>

      {/* Text content */}
      <motion.div className="hero__content" style={{ y: textY, opacity }}>
        <motion.p
          className="hero__eyebrow serif"
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.6em' }}
          transition={{ duration: 1.8, delay: 0.4, ease: 'easeOut' }}
        >
          A love letter to
        </motion.p>

        <motion.h1
          className="hero__title serif"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {['Happy', 'Birthday,', 'My Love'].map((word, i) => (
            <motion.span key={i} className="hero__title-word" variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          className="hero__divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8, ease: 'easeOut' }}
        >
          Every moment with you is a gift I never deserved
        </motion.p>

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          <span className="hero__scroll-line" />
          <span>Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
