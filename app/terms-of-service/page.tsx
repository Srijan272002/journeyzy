import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Hotfoot",
  description: "Terms of Service for Hotfoot - AI Travel Assistant",
};

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="mb-8">
          <p className="text-muted-foreground">Last updated: April 30, 2025</p>
        </div>

        <p>
          These Terms of Service ("Terms") govern your use of the Hotfoot mobile and web applications and related services (the "Service"), which are owned and operated by HOTFOOT LTD, a company registered in England and Wales. By accessing or using the Service, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">1. Use of the Service</h2>
        <h3 className="text-xl font-semibold mb-2">a. Eligibility</h3>
        <p>
          To use the Service, you must be at least 12 years of age. By using the Service, you represent that you meet these requirements.
        </p>

        <h3 className="text-xl font-semibold mb-2">b. Account Creation</h3>
        <p>
          You may need to create an account to access certain features. You agree to provide accurate, complete, and up-to-date information and are responsible for maintaining the confidentiality of your account credentials.
        </p>

        <h3 className="text-xl font-semibold mb-2">c. Acceptable Use</h3>
        <p>
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not misuse the Service, engage in illegal activity, or attempt to interfere with the proper operation of the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">2. Description of the Service</h2>
        <p>
          Hotfoot is a travel planning platform that helps users generate personalized travel itineraries using AI, including trip schedules, activities, bookings, and collaborations. Hotfoot may integrate with third-party services to provide additional features such as flight, hotel, and activity recommendations.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">3. User Content</h2>
        <h3 className="text-xl font-semibold mb-2">a. Content Ownership</h3>
        <p>
          You retain ownership of the content you submit or generate using the Service. By submitting content, you grant HOTFOOT LTD a worldwide, royalty-free, non-exclusive, sublicensable license to use, display, and distribute such content solely for the purpose of operating and improving the Service.
        </p>

        <h3 className="text-xl font-semibold mb-2">b. Prohibited Content</h3>
        <p>
          You agree not to upload or transmit content that is unlawful, offensive, infringes intellectual property, invades privacy, or otherwise violates any rights or laws.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">4. Subscription and Payments</h2>
        <p>
          Some features of the Service may require a paid subscription. You agree to the pricing and payment terms presented to you at the time of subscription. Subscription fees are non-refundable except as required by applicable law or platform-specific refund policies (e.g., Apple App Store or Google Play).
        </p>
        <p>
          HOTFOOT LTD reserves the right to change pricing or introduce new fees with reasonable notice.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">5. Data and Privacy</h2>
        <p>
          Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, use, and protect your personal information. By using the Service, you agree to the practices described in the Privacy Policy.
        </p>
        <p>
          Hotfoot may integrate third-party APIs (e.g., Google, Amadeus, Yelp, Apple, TripAdvisor) that may also collect data in accordance with their own terms and privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">6. Intellectual Property</h2>
        <p>
          All rights, title, and interest in and to the Service, including all associated software, content, trademarks, and other materials, are owned or licensed by HOTFOOT LTD. You are granted a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial use.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">7. Disclaimers</h2>
        <p>
          The Service is provided "as is" and "as available." HOTFOOT LTD makes no warranties regarding the accuracy, reliability, or availability of the Service, itineraries, travel data, or any third-party integrations. Travel involves inherent risks, and you assume full responsibility for your use of the Service and your personal travel decisions.
        </p>
        <p>
          HOTFOOT LTD disclaims all liability for any loss, injury, or inconvenience arising from use of the Service or following itineraries, recommendations, or bookings generated via the platform.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, HOTFOOT LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or goodwill arising from your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">9. Termination</h2>
        <p>
          HOTFOOT LTD reserves the right to suspend or terminate your access to the Service at its sole discretion, with or without notice, for any reason, including violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">10. Modifications</h2>
        <p>
          We may modify these Terms at any time. We will notify you of significant changes via the app or website. Your continued use of the Service following any such changes constitutes your acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">11. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">12. Contact</h2>
        <p>
          For any questions or concerns about these Terms, please contact:<br />
          HOTFOOT LTD<br />
          Email: info@hotfoot.ai
        </p>
      </div>
    </div>
  );
} 