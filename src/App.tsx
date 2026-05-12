import { ReactLenis } from 'lenis/react';
import CustomCursor from './components/CustomCursor';
import HeroSection from './components/HeroSection';
import MessageSection from './components/MessageSection';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <main className="app-container">
        <CustomCursor />
        
        <HeroSection />
        
        <div className="content-spacer" style={{ height: '10vh', backgroundColor: 'var(--black)' }} />
        
        <MessageSection />
        
        <div className="content-spacer" style={{ height: '10vh', backgroundColor: 'var(--black)' }} />
        
        <GallerySection />
        
        <VideoSection />
      </main>
    </ReactLenis>
  );
}

export default App;
