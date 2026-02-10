import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GlobalSupport } from './components/GlobalSupport';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <GlobalSupport />
      </main>
      <Footer />
    </div>
  );
}