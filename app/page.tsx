import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import AdaptiveAI from '@/components/adaptive-ai';
import AppDownload from '@/components/app-download';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <AdaptiveAI />
      <AppDownload />
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </main>
  );
}