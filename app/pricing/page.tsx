// app/pricing/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Toaster } from "@/components/ui/sonner";
import { pageSEO, siteConfig } from "@/lib/seo.config";
import { HeroStrip } from "@/components/sections/HeroStrip";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Transparent Pricing for Elderly Care | MaziCare",
  description: "Clear pricing with no surprises. Understand our fees for families and caregivers. Contact us for personalized quotes.",
  keywords: ["elderly care pricing", "caregiver rates", "platform fees", "transparent pricing", "cost of care Greece"],
  openGraph: {
    title: "Transparent Pricing for Elderly Care | MaziCare",
    description: "Clear pricing with no surprises. Understand our fees for families and caregivers. Contact us for personalized quotes.",
    url: `${siteConfig.url}/pricing`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing for Elderly Care | MaziCare",
    description: "Clear pricing with no surprises. Understand our fees for families and caregivers. Contact us for personalized quotes.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
    languages: {
      "el-GR": `${siteConfig.url}/el/pricing`,
      "en": `${siteConfig.url}/pricing`,
    },
  },
};

// Simple Pricing Component - Using your brand colors
function SimplePricingMessage() {
  return (
    <div className="w-full bg-gradient-to-br from-[#e9ebef] to-[#ececf0] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Price Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-[#030213] rounded-full mb-8">
          <span className="text-3xl font-bold text-white">€50</span>
          <span className="text-sm text-white/80 ml-1">/έτος</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#030213] mb-6">
          Μία απλή, ετήσια συνδρομή
          <br />
          <span className="text-[#717182]">Χωρίς κρυφές χρεώσεις</span>
        </h2>
        
        {/* Main Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl text-[#030213] mb-8 leading-relaxed">
            Χρεώνουμε <strong className="font-bold">μόνο 50 ευρώ ετησίως</strong> για την πρόσβαση 
            σε <strong className="font-bold">όλες τις υπηρεσίες μας</strong>, 
            τόσο για τις <strong className="font-bold">οικογένειες</strong> όσο και για τους <strong className="font-bold">φροντιστές</strong>.
          </p>
          
          {/* Benefits Card */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-[rgba(0,0,0,0.1)]">
            <ul className="space-y-4 text-lg text-[#030213]">
              <li className="flex items-start justify-center gap-3">
                <svg className="w-6 h-6 text-[#030213] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left">Καμία μηνιαία χρέωση - η τιμή είναι ετήσια</span>
              </li>
              <li className="flex items-start justify-center gap-3">
                <svg className="w-6 h-6 text-[#030213] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left">Καμία προμήθεια στις αμοιβές των φροντιστών</span>
              </li>
              <li className="flex items-start justify-center gap-3">
                <svg className="w-6 h-6 text-[#030213] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left">Πλήρης πρόσβαση σε όλες τις δυνατότητες της πλατφόρμας</span>
              </li>
              <li className="flex items-start justify-center gap-3">
                <svg className="w-6 h-6 text-[#030213] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left">Απεριόριστη υποστήριξη πελατών</span>
              </li>
              <li className="flex items-start justify-center gap-3">
                <svg className="w-6 h-6 text-[#030213] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left">Ασφάλεια και προστασία δεδομένων</span>
              </li>
            </ul>
          </div>
          
          {/* Closing Statement */}
          <p className="text-lg text-[#717182] italic">
            Διαφανής τιμολόγηση. Χωρίς εκπλήξεις. Μόνο η υποστήριξη που χρειάζεστε.
          </p>
        </div>
        
        {/* Call to Action Buttons - Using <a> tags instead of buttons with onClick */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://mazicare-webapp.vercel.app/signup"
            className="bg-[#030213] text-white font-semibold py-4 px-10 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg inline-block"
          >
            Εγγραφή Τώρα - Μόνο €50/έτος
          </a>
          <a
            href="/contact"
            className="bg-white text-[#030213] font-semibold py-4 px-10 rounded-lg border-2 border-[#030213] hover:bg-[#f3f3f5] transition-all text-lg inline-block"
          >
            Επικοινωνήστε μαζί μας
          </a>
        </div>
        
        {/* Additional Info */}
        <p className="mt-8 text-[#717182] text-sm">
          Η συνδρομή ανανεώνεται αυτόματα κάθε χρόνο. Μπορείτε να διακόψετε οποιαδήποτε στιγμή.
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <HeroStrip />
      <main className="overflow-x-hidden">
        <SimplePricingMessage />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}