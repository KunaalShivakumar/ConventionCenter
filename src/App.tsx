import { About } from './sections/About';
import { BottomBar } from './components/BottomBar';
import { Facilities } from './sections/Facilities';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';
import { Functions } from './sections/Functions';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Highlights } from './sections/Highlights';
import { Location } from './sections/Location';
import { Navigation } from './components/Navigation';
import { Pricing } from './sections/Pricing';
import { Rooms } from './sections/Rooms';
import { VegetarianDining } from './sections/VegetarianDining';

export function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-temple-900 focus:shadow-soft"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Highlights />
        <Functions />
        <Facilities />
        <VegetarianDining />
        <Rooms />
        <Gallery />
        <Pricing />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
}
