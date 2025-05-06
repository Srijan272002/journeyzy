import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Hotfoot",
  description: "Privacy Policy for Hotfoot - AI Travel Assistant",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link 
        href="/" 
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="mb-8">
          <p className="text-muted-foreground">
            Effective Date: April 30, 2025<br />
            Last Updated: April 30, 2025
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Welcome to Hotfoot, a product owned and operated by HOTFOOT LTD ("we," "our," or "us"), registered in England and Wales. We are committed to protecting your privacy and handling your personal data responsibly. This Privacy Policy outlines how we collect, use, store, and share information about you when you use our mobile application, website, and related services (collectively, the "Services").
        </p>
        <p>
          If you have any questions about this Privacy Policy or our practices, please contact us at:<br />
          📧 info@hotfoot.ai
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        
        <h3 className="text-xl font-semibold mb-2">a. Information You Provide to Us:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Preferences and profile settings</li>
          <li>Content and communication you create or submit (e.g., feedback, reviews)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">b. Information We Collect Automatically:</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Device information (device ID, type, OS)</li>
          <li>IP address</li>
          <li>Geolocation (when enabled)</li>
          <li>Usage data (e.g., app activity, page views, feature usage)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">c. Third-Party Data:</h3>
        <p>
          We may receive personal data from third-party services (such as Google or Apple) when you use features like single sign-on or API integrations (e.g., maps, booking systems).
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc pl-6">
          <li>Provide, maintain, and improve the Hotfoot app and services</li>
          <li>Facilitate account creation and login</li>
          <li>Personalize content and recommendations</li>
          <li>Send administrative communications</li>
          <li>Respond to user inquiries and feedback</li>
          <li>Deliver promotional messages and special offers (with your consent)</li>
          <li>Ensure app security, integrity, and compliance</li>
          <li>Support analytics and performance reporting</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">3. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data.</p>
        <p>We may share information with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers and partners: who assist with hosting, analytics, customer support, payments, and similar services.</li>
          <li>Third-party APIs (e.g., Google Places, TripAdvisor, Amadeus, etc.) for itinerary building, travel booking, and content enrichment.</li>
          <li>Legal authorities: if required by law or to protect our legal rights.</li>
        </ul>
        <p>All third-party partners are required to protect your information in accordance with this policy and applicable laws.</p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">4. Data Retention</h2>
        <p>
          We retain personal information only as long as necessary to fulfill the purposes described above, or to comply with legal obligations. When your data is no longer needed, we securely delete or anonymize it.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">5. Your Privacy Rights</h2>
        <p>Depending on your location (e.g., UK, EEA, California), you may have the right to:</p>
        <ul className="list-disc pl-6">
          <li>Access, correct, or delete your personal data</li>
          <li>Object to or restrict data processing</li>
          <li>Withdraw consent at any time</li>
          <li>Request data portability</li>
        </ul>
        <p>To exercise any of these rights, contact us at info@hotfoot.ai. We will respond within the timeframe required by law.</p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">6. International Data Transfers</h2>
        <p>
          As HOTFOOT LTD operates globally, your data may be processed outside of your country, including in countries that may not provide the same level of data protection. In such cases, we use appropriate safeguards (such as standard contractual clauses) to ensure adequate protection.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">7. Children's Privacy</h2>
        <p>
          Our services are not intended for children under 16 years old. We do not knowingly collect personal information from children. If we learn that we have collected data from a child, we will delete it promptly.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">8. Security of Your Information</h2>
        <p>
          We implement technical, administrative, and physical security measures to protect your information. However, no method of electronic transmission or storage is completely secure. Please use the app responsibly and notify us of any security concerns.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">9. Third-Party Services</h2>
        <p>
          Our app may link to third-party services or content. We are not responsible for their privacy practices. Please review their policies before submitting any personal data.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">10. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of significant changes via email or app notification. The most current version will always be available in the app and on our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">11. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy, you may contact us at:<br />
          HOTFOOT LTD<br />
          Registered in England and Wales<br />
          📧 info@hotfoot.ai<br />
          🌐 www.hotfoot.ai
        </p>
      </div>
    </div>
  );
} 