import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';

export default function Home() {
  return (
    <div className='flex flex-col flex-1'>
      <Navbar />
      <Hero/>
      <Education />
    </div>
  );
}