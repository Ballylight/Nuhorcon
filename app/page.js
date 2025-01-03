import Hero from './components/Sections/Hero/Hero';
import Blog from './components/Sections/Blog/Blog';
import Cta from './components/Sections/Cta/Cta';
import Testimonials from './components/Sections/Testimonials/Testimonials';
import Features from './components/Sections/Features/Features'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features/>
      <Blog />  
      {/* <Testimonials/> */}
      <Cta />
    </div>
  );
}
