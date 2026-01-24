// app/contact/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import { pageSEO, siteConfig } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: "Contact MaziCare | Elderly Care Support in Greece",
  description: "Get in touch with MaziCare for questions, support, or partnership inquiries. We're here to help with elderly care needs.",
  keywords: ["contact elderly care", "caregiver support", "family assistance", "partnership inquiries", "help Greece"],
  openGraph: {
    title: "Contact MaziCare | Elderly Care Support in Greece",
    description: "Get in touch with MaziCare for questions, support, or partnership inquiries. We're here to help with elderly care needs.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MaziCare | Elderly Care Support in Greece",
    description: "Get in touch with MaziCare for questions, support, or partnership inquiries. We're here to help with elderly care needs.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
    languages: {
      "el-GR": `${siteConfig.url}/el/contact`,
      "en": `${siteConfig.url}/contact`,
    },
  },
};

// Contact Form Component
function ContactForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-[rgba(0,0,0,0.1)]">
      <h3 className="text-2xl font-bold text-[#030213] mb-6">
        Στείλτε μας μήνυμα
      </h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-[#030213] mb-2">
              Όνομα *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
              placeholder="Το όνομά σας"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-[#030213] mb-2">
              Επώνυμο *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
              placeholder="Το επώνυμό σας"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#030213] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#030213] mb-2">
            Τηλέφωνο
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
            placeholder="+30 123 456 7890"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#030213] mb-2">
            Θέμα *
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
          >
            <option value="">Επιλέξτε θέμα</option>
            <option value="general">Γενικό ερώτημα</option>
            <option value="family">Για οικογένεια</option>
            <option value="caregiver">Για φροντιστή/τρια</option>
            <option value="partnership">Συνεργασία</option>
            <option value="support">Τεχνική υποστήριξη</option>
            <option value="other">Άλλο</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#030213] mb-2">
            Μήνυμα *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all resize-none"
            placeholder="Γράψτε το μήνυμά σας εδώ..."
          ></textarea>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            name="privacy"
            required
            className="w-4 h-4 text-[#030213] border-[rgba(0,0,0,0.1)] rounded focus:ring-[#030213] focus:ring-2"
          />
          <label htmlFor="privacy" className="ml-2 text-sm text-[#717182]">
            Συμφωνώ με την Πολιτική Απορρήτου και τους Όρους Χρήσης *
          </label>
        </div>
        
        <button
          type="submit"
          className="w-full bg-[#030213] text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg"
        >
          Αποστολή Μηνύματος
        </button>
      </form>
    </div>
  );
}

// Contact Info Component
function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-[#030213] mb-6">
          Πληροφορίες Επικοινωνίας
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#030213]">Διεύθυνση</h4>
              <p className="text-[#717182]">Ελ. Βενιζέλου 123<br />Αθήνα, 115 23<br />Ελλάδα</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#030213]">Τηλέφωνο</h4>
              <p className="text-[#717182]">
                <a href="tel:+302101234567" className="hover:text-[#030213] transition-colors">
                  +30 210 123 4567
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#030213]">Email</h4>
              <p className="text-[#717182]">
                <a href="mailto:info@mazicare.gr" className="hover:text-[#030213] transition-colors">
                  info@mazicare.gr
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#030213]">Ωράριο Λειτουργίας</h4>
              <p className="text-[#717182]">
                Δευτέρα - Παρασκευή: 9:00 - 18:00<br />
                Σάββατο: 10:00 - 14:00<br />
                Κυριακή: Κλειστά
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-[#e9ebef] to-[#ececf0] rounded-xl p-6">
        <h4 className="font-bold text-[#030213] text-lg mb-4">
          Συχνές Ερωτήσεις
        </h4>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-[#030213] mb-1">
              Πόσο καιρό χρειάζεται για να λάβω απάντηση;
            </p>
            <p className="text-sm text-[#717182]">
              Απαντάμε συνήθως εντός 24 ωρών κατά τις εργάσιμες ημέρες.
            </p>
          </div>
          <div>
            <p className="font-medium text-[#030213] mb-1">
              Υποστηρίζετε επείγουσες περιπτώσεις;
            </p>
            <p className="text-sm text-[#717182]">
              Ναι, για επείγουσες ανάγκες καλέστε μας απευθείας στο τηλέφωνο.
            </p>
          </div>
          <div>
            <p className="font-medium text-[#030213] mb-1">
              Μπορώ να επικοινωνήσω και μέσω social media;
            </p>
            <p className="text-sm text-[#717182]">
              Ναι, μας βρίσκετε στο Facebook και LinkedIn για γενικές ερωτήσεις.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}