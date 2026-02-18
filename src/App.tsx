import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Info from './components/Info';

export default function App() {
  return (
    <div className="bg-[#12100E] min-h-screen text-[#EAE0D5] font-sans selection:bg-[#EAE0D5] selection:text-[#12100E] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Info />
      </main>
    </div>
  );
}
