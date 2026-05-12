import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './VideoSection.css';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="video-section">
      <div className="video-section__content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="video-section__visual"
        >
          <img 
            src="https://images.unsplash.com/photo-1511733334857-3b50931168de?w=1600&q=80" 
            alt="Video cover" 
            className="video-section__cover"
          />
          <div className="video-section__overlay" />
          
          <div className="video-section__info">
            <h2 className="serif">One Last Surprise</h2>
            <p>Our journey captured in motion</p>
            
            <button 
              className="video-section__play-btn"
              onClick={() => setIsOpen(true)}
              data-cursor
            >
              <Play fill="currentColor" size={24} />
              <span>Play Video</span>
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="video-modal__overlay" onClick={() => setIsOpen(false)} />
            
            <motion.div 
              className="video-modal__container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <button 
                className="video-modal__close" 
                onClick={() => setIsOpen(false)}
                data-cursor
              >
                <X size={32} />
              </button>
              
              <div className="video-modal__player">
                {/* Dummy video placeholder */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="Birthday Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <footer className="footer">
        <p className="serif">With all my love, forever.</p>
        <div className="footer__divider" />
      </footer>
    </section>
  );
}
