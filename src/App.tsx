import Education from '@/sections/education';
import Footer from './sections/footer';
import Home from '@/sections/home';
import Projects from '@/sections/projects';
import Skills from '@/sections/skills';

export default function App() {
  return (
    <main className='mx-auto flex w-full max-w-screen-lg flex-col items-center gap-16'>
      <Home />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
