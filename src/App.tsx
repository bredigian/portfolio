import Education from '@/sections/education';
import Home from '@/sections/home';
import Me from '@/sections/me';
import Projects from '@/sections/projects';
import Skills from '@/sections/skills';

export default function App() {
  return (
    <main className='mx-auto flex w-full max-w-screen-lg flex-col items-center gap-16'>
      <Home />
      <Projects />
      <Skills />
      <Education />
      <Me />
    </main>
  );
}
