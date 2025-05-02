import Link from "next/link";
import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Plane className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Journeyz</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered travel assistant that creates personalized itineraries and adapts to changes in real-time.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Press</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Features</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Trip Planning</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Flight Booking</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Hotel Reservations</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Real-time Updates</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Travel Insights</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Journeyz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}