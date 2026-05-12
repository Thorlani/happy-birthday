import { motion } from 'framer-motion';
import './MessageSection.css';

const words = [
  "In the quiet moments and the loud ones,",
  "your love remains my constant north.",
  "You are the light in every shadow,",
  "the melody in every silence.",
  "Today isn't just about celebrating your birth,",
  "it's about celebrating the day the world",
  "became infinitely more beautiful."
];

export default function MessageSection() {
  return (
    <section className="message">
      <div className="message__container">
        {words.map((line, i) => (
          <div key={i} className="message__line-wrapper">
            <motion.p
              className="message__line serif"
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1
              }}
            >
              {line}
            </motion.p>
          </div>
        ))}
        
        <motion.div 
          className="message__decoration"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <div className="message__dot" />
          <div className="message__line-deco" />
          <div className="message__dot" />
        </motion.div>
      </div>
    </section>
  );
}
