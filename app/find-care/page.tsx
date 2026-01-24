// app/find-care/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Toaster } from "@/components/ui/sonner";
import { pageSEO, siteConfig } from "@/lib/seo.config";
import { HeroStrip } from "@/components/sections/HeroStrip";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Βρείτε Αξιόπιστη Φροντίδα Ηλικιωμένων στο Σπίτι στην Ελλάδα | MaziCare",
  description: "Βρείτε επαληθευμένους φροντιστές με ελέγχους ιστορικού, συνεντεύξεις και συνεχή υποστήριξη για τα αγαπημένα σας πρόσωπα στην Ελλάδα.",
  keywords: ["φροντίδα ηλικιωμένων Ελλάδα", "αντιστοίχιση φροντιστών", "οικιακή φροντίδα", "επαληθευμένοι φροντιστές", "οικογενειακή υποστήριξη"],
  openGraph: {
    title: "Βρείτε Αξιόπιστη Φροντίδα Ηλικιωμένων στο Σπίτι στην Ελλάδα | MaziCare",
    description: "Βρείτε επαληθευμένους φροντιστές με ελέγχους ιστορικού, συνεντεύξεις και συνεχή υποστήριξη για τα αγαπημένα σας πρόσωπα στην Ελλάδα.",
    url: `${siteConfig.url}/find-care`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Βρείτε Αξιόπιστη Φροντίδα Ηλικιωμένων στο Σπίτι στην Ελλάδα | MaziCare",
    description: "Βρείτε επαληθευμένους φροντιστές με ελέγχους ιστορικού, συνεντεύξεις και συνεχή υποστήριξη για τα αγαπημένα σας πρόσωπα στην Ελλάδα.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/find-care`,
    languages: {
      "el-GR": `${siteConfig.url}/el/find-care`,
      "en": `${siteConfig.url}/find-care`,
    },
  },
};

// Find Care Hero Component
function FindCareHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Βρείτε αξιόπιστη φροντίδα ηλικιωμένων στο σπίτι στην Ελλάδα
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Ασφαλής, αξιόπιστη φροντίδα για τα αγαπημένα σας πρόσωπα με επαληθευμένους επαγγελματίες και συνεχή υποστήριξη
          </p>
          
          {/* Value points */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium text-gray-900">Επαληθευμένοι φροντιστές</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-teal-100 shadow-sm">
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                <svg className="h-4 w-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900">Συνεχής υποστήριξη</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-indigo-100 shadow-sm">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-medium text-gray-900">Διαφανής τιμολόγηση</span>
            </div>
          </div>

          {/* Quick selection widget */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 max-w-3xl mx-auto border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Πείτε μας τι χρειάζεστε</h3>
                <p className="text-sm text-gray-600">Βρείτε τον τέλειο φροντιστή σε λίγα λεπτά</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Τύπος φροντίδας
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  defaultValue=""
                >
                  <option value="">Επιλέξτε τύπο φροντίδας</option>
                  <option value="companionship">Συνοδία</option>
                  <option value="24-7">24/7 Ζωντανή φροντίδα</option>
                  <option value="post-hospital">Φροντίδα μετά από νοσοκομείο</option>
                  <option value="dementia">Φροντίδα άνοιας</option>
                  <option value="night-care">Νυχτερινή φροντίδα</option>
                  <option value="mobility">Βοήθεια κινητικότητας</option>
                  <option value="personal-care">Προσωπική φροντίδα</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Τοποθεσία
                </label>
                <input
                  type="text"
                  placeholder="Πόλη ή περιοχή στην Ελλάδα"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>
            </div>
            <a
              href="https://mazicare-webapp.vercel.app/signup?role=family"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
            >
              Ξεκινήστε Τώρα
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Απαντήστε σε αυτές τις απλές ερωτήσεις για να βρείτε τον τέλειο φροντιστή
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Είναι αυτό κατάλληλο για τον γονιό μου;
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Η MaziCare είναι σχεδιασμένη για οικογένειες που επιθυμούν επαγγελματική, αξιόπιστη φροντίδα με πλήρη ηρεμία.
              Είτε το αγαπημένο σας πρόσωπο χρειάζεται περιστασιακή συνοδία είτε πλήρης βοήθεια, σας συνδέουμε με
              προσεκτικά ελεγμένους φροντιστές που κατανοούν τις ελληνικές οικογενειακές αξίες.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <p className="text-lg text-gray-700">
                Κάθε φροντιστής περνά από ενδελεχείς ελέγχους ιστορικού και συνεντεύξεις. Διατηρείτε πλήρη έλεγχο
                μέσω του ψηφιακού μας πίνακα ελέγχου, με υποστήριξη 24/7 πάντα διαθέσιμη.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Component
function HowItWorks() {
  const steps = [
    {
      icon: (
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
          <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ),
      title: "1. Πείτε μας για το αγαπημένο σας πρόσωπο",
      description: "Μοιραστείτε τις ανάγκες, το πρόγραμμα και την τοποθεσία",
      reassurance: "Σεβόμαστε το απόρρητό σας και χειριζόμαστε όλες τις πληροφορίες με ασφάλεια",
      color: "blue"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
          <svg className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-7.645a8.5 8.5 0 01-1.243 11.245M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      ),
      title: "2. Αντιστοιχηθείτε με επαληθευμένους φροντιστές",
      description: "Προτείνουμε φροντιστές που πληρούν τις συγκεκριμένες απαιτήσεις σας",
      reassurance: "Όλοι οι φροντιστές περνούν αυστηρούς ελέγχους ιστορικού και συνεντεύξεις",
      color: "teal"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center">
          <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
      ),
      title: "3. Γνωρίστε, επιλέξτε και ξεκινήστε τη φροντίδα",
      description: "Προγραμματίστε συνεντεύξεις και επιλέξτε τον τέλειο φροντιστή",
      reassurance: "Διευκολύνουμε τις γνωριμίες και βοηθάμε στις αρχικές συναντήσεις",
      color: "indigo"
    },
    {
      icon: (
        <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center">
          <svg className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      title: "4. Παρακολουθήστε και διαχειριστείτε τη φροντίδα",
      description: "Χρησιμοποιήστε τον πίνακα ελέγχου MaziCare για ενημερώσεις και επικοινωνία",
      reassurance: "Ενημερώσεις σε πραγματικό χρόνο και υποστήριξη 24/7 διασφαλίζουν την ηρεμία",
      color: "cyan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Πώς λειτουργεί για οικογένειες
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Απλά βήματα για να βρείτε και να διαχειριστείτε την τέλεια φροντίδα για το αγαπημένο σας πρόσωπο
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center relative overflow-hidden group">
              {/* Color accent line */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-${step.color}-500`}></div>
              
              <div className="flex justify-center mb-6 mt-2">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              <div className={`p-3 rounded-lg bg-${step.color}-50`}>
                <p className={`text-sm text-${step.color}-700`}>
                  {step.reassurance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why MaziCare Component
function WhyMaziCare() {
  const benefits = [
    {
      icon: (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
          <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      title: "Επαληθευμένοι επαγγελματίες",
      description: "Έλεγχοι ιστορικού, συνεντεύξεις και επαλήθευση αναφορών",
      comparison: "Σε αντίθεση με γραφεία που ελέγχουν μόνο ταυτότητες, πραγματοποιούμε ολοκληρωμένη επιθεώρηση",
      color: "blue"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
          <svg className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Τοπική παρουσία στην Ελλάδα",
      description: "Βαθιά κατανόηση του ελληνικού οικογενειακού πολιτισμού και αξιών",
      comparison: "Κατανοούμε τη δυναμική των ελληνικών οικογενειών, σε αντίθεση με διεθνείς πλατφόρμες",
      color: "teal"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
          <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
      ),
      title: "Συνεχής υποστήριξη",
      description: "Αλλάξτε φροντιστές ή προσαρμόστε τα σχέδια εύκολα, ανά πάσα στιγμή",
      comparison: "Ομάδα υποστήριξης 24/7 έναντι περιορισμένων ωραρίων με παραδοσιακά γραφεία",
      color: "indigo"
    },
    {
      icon: (
        <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
          <svg className="h-6 w-6 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
      ),
      title: "Ψηφιακός πίνακας ελέγχου",
      description: "Ενημερώσεις σε πραγματικό χρόνο, επικοινωνία και διαχείριση φροντίδας",
      comparison: "Πλήρης διαφάνεια έναντι ενημερώσεων μόνο τηλεφωνικά με παραδοσιακές υπηρεσίες",
      color: "cyan"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Γιατί να επιλέξετε τη MaziCare έναντι εναλλακτικών;
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Συνδυάζουμε παραδοσιακές ελληνικές οικογενειακές αξίες με σύγχρονη τεχνολογία και αυστηρά πρότυπα
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {benefit.description}
                  </p>
                  <div className={`p-3 rounded-lg bg-${benefit.color}-50`}>
                    <p className={`text-sm text-${benefit.color}-700 font-medium`}>
                      {benefit.comparison}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Είναι αυτό ασφαλές για τον γονιό μου;
          </h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-6">
            Η διαδικασία πολλαπλών βημάτων επαλήθευσης μας διασφαλίζει ότι μόνο καταρτισμένοι, αξιόπιστοι επαγγελματίες
            φροντίζουν τα αγαπημένα σας πρόσωπα. Πηγαίνουμε πέρα από τους βασικούς ελέγχους για να παρέχουμε πραγματική ηρεμία.
          </p>
          <a
            href="#safety"
            className="inline-flex items-center text-white font-semibold hover:text-blue-100 bg-white/20 px-4 py-2 rounded-lg"
          >
            Μάθετε για τη διαδικασία ασφαλείας μας
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Safety & Verification Component
function SafetyVerification() {
  const verificationSteps = [
    {
      step: "Επαλήθευση Ταυτότητας",
      description: "Επαλήθευση ταυτότητας και εγκυρότητας προσωπικών στοιχείων",
      details: ["Έγκυρη ελληνική ταυτότητα ή διαβατήριο", "Επαλήθευση τρέχουσας διεύθυνσης", "Επαλήθευση φωτογραφίας"],
      color: "blue"
    },
    {
      step: "Επαγγελματική Εμπειρία",
      description: "Ενδελεχής ανασκόπηση ιστορικού εργασίας και προσόντων",
      details: ["Ελάχιστη 1 χρόνια εμπειρίας", "Έλεγχος αναφορών (2 ελάχιστες)", "Επαλήθευση πιστοποιήσεων"],
      color: "teal"
    },
    {
      step: "Έλεγχος Ιστορικού",
      description: "Ολοκληρωμένος έλεγχος για διασφάλιση ασφαλείας",
      details: ["Έλεγχος ποινικού μητρώου", "Ανασκόπηση επαγγελματικής διαγωγής", "Έλεγχος κοινωνικών δικτύων"],
      color: "indigo"
    },
    {
      step: "Εκπαίδευση & Δεξιότητες",
      description: "Αξιολόγηση ικανοτήτων φροντίδας",
      details: ["Πιστοποίηση CPR/Πρώτων Βοηθειών", "Επαλήθευση εξειδικευμένης εκπαίδευσης", "Αξιολόγηση δεξιοτήτων"],
      color: "cyan"
    },
    {
      step: "Διαδικασία Συνέντευξης",
      description: "Σε βάθος αξιολόγηση από την ομάδα μας",
      details: ["Συνέντευξη βίντεο", "Ερωτήσεις βάσει σεναρίων", "Αξιολόγηση πολιτιστικής προσαρμογής"],
      color: "blue"
    },
    {
      step: "Συνεχής Παρακολούθηση",
      description: "Συνεχής διασφάλιση ποιότητας",
      details: ["Τακτικές αναθεωρήσεις απόδοσης", "Σύστημα ανατροφοδότησης οικογενειών", "Συνεχής εκπαίδευση"],
      color: "teal"
    }
  ];

  return (
    <section id="safety" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Η διαδικασία 6 βημάτων ασφαλείας & επαλήθευσης
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Κάθε φροντιστής της MaziCare περνά από αυστηρή επιθεώρηση πριν ενταχθεί στην πλατφόρμα μας.
            Δεν αφήνουμε τίποτα στην τύχη όταν πρόκειται για την ασφάλεια της οικογένειάς σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {verificationSteps.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden group">
              {/* Color accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-${item.color}-500`}></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-${item.color}-50 rounded-full flex items-center justify-center`}>
                  <span className={`text-${item.color}-600 font-bold`}>{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary">{item.step}</h3>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className={`w-5 h-5 bg-${item.color}-50 rounded-full flex items-center justify-center mr-2`}>
                      <svg className={`h-3 w-3 text-${item.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                Δοκιμαστική Περίοδος & Συνεχείς Αξιολογήσεις
              </h3>
              <p className="text-gray-700">
                Όλοι οι φροντιστές ξεκινούν με δοκιμαστική περίοδο και οι οικογένειες παρέχουν συνεχείς αξιολογήσεις και ανατροφοδότηση.
                Αυτή η συνεχής αξιολόγηση διασφαλίζει σταθερή ποιότητα και επιτρέπει άμεση ενέργεια εάν χρειαστεί.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-700">Επαληθευμένοι φροντιστές</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  const features = [
    {
      title: "Πρόγραμμα Φροντίδας",
      description: "Προβολή και διαχείριση εβδομαδιαίων προγραμμάτων φροντίδας σε πραγματικό χρόνο",
      icon: "📅",
      color: "blue"
    },
    {
      title: "Προφίλ Φροντιστή",
      description: "Πρόσβαση σε πλήρη προφίλ φροντιστών με αξιολογήσεις και κριτικές",
      icon: "👤",
      color: "teal"
    },
    {
      title: "Ημερήσιες Σημειώσεις",
      description: "Διαβάστε σημειώσεις φροντιστών για ημερήσιες δραστηριότητες και παρατηρήσεις",
      icon: "📝",
      color: "indigo"
    },
    {
      title: "Ασφαλής Μηνυματοδοσία",
      description: "Επικοινωνήστε απευθείας με τον φροντιστή σας μέσω ασφαλούς συνομιλίας",
      icon: "💬",
      color: "cyan"
    },
    {
      title: "Παρακολούθηση Φαρμάκων",
      description: "Παρακολούθηση προγραμμάτων φαρμάκων και χορήγησης",
      icon: "💊",
      color: "blue"
    },
    {
      title: "Χρέωση & Πληρωμές",
      description: "Προβολή διαφανών χρεώσεων και πραγματοποίηση ασφαλών πληρωμών",
      icon: "💰",
      color: "teal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Ο Οικογενειακός σας Πίνακας Ελέγχου
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Πλήρης ορατότητα και έλεγχος της φροντίδας του αγαπημένου σας προσώπου, όλα σε ένα μέρος
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-gray-200">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white">
                {/* Mock Dashboard UI */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold">Πίνακας Φροντίδας</div>
                    <div className="text-sm bg-white/20 px-3 py-1 rounded-full">Σήμερα</div>
                  </div>
                  
                  {/* Schedule */}
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Πρόγραμμα Σήμερα</div>
                      <div className="text-sm">09:00 - 17:00</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">Μ</div>
                      <div>
                        <div className="font-medium">Μαρία Κ.</div>
                        <div className="text-sm opacity-80">Ανώτερος Φροντιστής</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Notes */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-medium mb-2">Πρόσφατη Σημείωση</div>
                    <div className="text-sm opacity-90">
                      "Κάναμε μια ωραίο περίπατο στο πάρκο σήμερα. Όρεξη καλή, φάρμακα πάρθηκαν στην ώρα τους."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Ό,τι χρειάζεστε σε έναν πίνακα ελέγχου
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow group">
                  <div className={`text-2xl mb-3 bg-${feature.color}-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-${feature.color}-100 transition-colors`}>
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ηρεμία από οπουδήποτε
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            Είτε είστε στη δουλειά, ταξιδεύετε ή ζείτε στο εξωτερικό, μείνετε συνδεδεμένοι με τη φροντίδα του αγαπημένου σας προσώπου.
            Οι ενημερώσεις σε πραγματικό χρόνο σας δίνουν αυτοπεποίθηση και ηρεμία.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Ενημερώσεις σε πραγματικό χρόνο</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Ασφαλές & ιδιωτικό</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <span>Άμεση επικοινωνία</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      quote: "Η MaziCare μας έδωσε ηρεμία ενώ φροντίζαμε τη μητέρα μου στην Αθήνα. Ο φροντιστής ήταν επαγγελματίας και συμπονετικός.",
      author: "Σοφία Κ.",
      location: "Αθήνα",
      role: "Κόρη",
      color: "blue"
    },
    {
      quote: "Ως απόδημος που ζω στο εξωτερικό, ο πίνακας ελέγχου της MaziCare μου επιτρέπει να παραμένω εμπλεκόμενος στη φροντίδα του πατέρα μου. Οι ενημερώσεις είναι ανεκτίμητες.",
      author: "Αλέξανδρος Μ.",
      location: "Λονδίνο",
      role: "Γιος στο εξωτερικό",
      color: "teal"
    },
    {
      quote: "Η διαδικασία επαλήθευσης μας καθησύχασε εντελώς. Ο φροντιστής μας νιώθει σαν οικογένεια πλέον.",
      author: "Μαρία & Δημήτρης",
      location: "Θεσσαλονίκη",
      role: "Οικογένεια",
      color: "indigo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            Εμπιστευόμαστε από οικογένειες σε όλη την Ελλάδα
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Εγγραφείτε εκατοντάδες οικογένειες που βρήκαν ηρεμία μέσω της MaziCare
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
              {/* Color accent line */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-${testimonial.color}-500`}></div>
              
              <div className="flex items-center mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-semibold text-primary">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Έτοιμοι να βρείτε φροντίδα για το αγαπημένο σας πρόσωπο;
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Εγγραφείτε εκατοντάδες οικογένειες που βρήκαν αξιόπιστη φροντίδα μέσω της MaziCare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mazicare-webapp.vercel.app/signup?role=family"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all md:py-4 md:text-lg md:px-10"
            >
              Ξεκινήστε Δωρεάν
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary hover:bg-primary/10 transition-all md:py-4 md:text-lg md:px-10"
            >
              Προγραμματίστε Συνέντευξη
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            Χωρίς δεσμεύσεις • Χωρίς πιστωτική κάρτα
          </p>
        </div>
      </div>
    </section>
  );
}

export default function FindCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroStrip />
      <main>
        <FindCareHero />
        <HowItWorks />
        <WhyMaziCare />
        <SafetyVerification />
        <DashboardPreview />
        <Testimonials />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}