import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './GallerySection.css';

const images = [
  {
    url: "https://images.unsplash.com/photo-1522673607200-164883efcdf1?w=800&q=80",
    title: "The beginning",
    offset: "0%",
    width: "40%"
  },
  {
    url: "https://images.unsplash.com/photo-1516589174184-c68526671ee6?w=800&q=80",
    title: "Quiet moments",
    offset: "15%",
    width: "35%"
  },
  {
    url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&q=80",
    title: "Laughter",
    offset: "-10%",
    width: "45%"
  },
  {
    url: "https://images.unsplash.com/photo-1511733334857-3b50931168de?w=800&q=80",
    title: "Everyday magic",
    offset: "5%",
    width: "30%"
  }
];

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery__header">
        <motion.h2 
          className="gallery__title serif"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Story in Frames
        </motion.h2>
      </div>
      
      <div className="gallery__grid">
        {images.map((img, i) => (
          <GalleryItem key={i} img={img} index={i} />
        ))}
      </div>
    </section>
  );
}

function GalleryItem({ img, index }: { img: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 100 : -100]);

  return (
    <motion.div 
      ref={ref}
      className="gallery__item-container"
      style={{ 
        width: img.width, 
        marginLeft: index % 2 === 0 ? "5%" : "auto",
        marginRight: index % 2 !== 0 ? "5%" : "auto",
        y 
      }}
    >
      <motion.div 
        className="gallery__item"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="gallery__img-wrapper">
          <img src={img.url} alt={img.title} />
        </div>
        <div className="gallery__info">
          <span className="gallery__caption serif">{img.title}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
