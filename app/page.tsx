// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

// Header Component
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AffiliateHub
        </Link>
        <div className="space-x-4">
          <Link href="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlock the Power of Affiliate Marketing
        </h1>
        <p className="text-xl mb-8">
          Join our community and start earning with the best deals online!
        </p>
        <Link
          href="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} AffiliateHub. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <Link href="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gray-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

// Home Page
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>AffiliateHub - Earn with Affiliate Marketing</title>
        <meta
          name="description"
          content="Join AffiliateHub to discover top affiliate opportunities and start earning commissions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}