// app/for-caregivers/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Toaster } from "@/components/ui/sonner";
import { pageSEO, siteConfig } from "@/lib/seo.config";
import { HeroStrip } from "@/components/sections/HeroStrip";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Βρείτε Σταθερά Επαγγέλματα Φροντίδας Ηλικιωμένων στην Ελλάδα | MaziCare",
  description: "Εγγραφείτε στο δίκτυο επαγγελματιών φροντιστών της MaziCare. Δίκαιη πληρωμή, ευέλικτα ωράρια και συνεχής υποστήριξη. Κάντε αίτηση σήμερα.",
  keywords: ["θέσεις εργασίας φροντιστών", "απασχόληση φροντίδας ηλικιωμένων", "δίκτυο φροντιστών", "επαγγελματικές ευκαιρίες", "θέσεις εργασίας υγείας Ελλάδα"],
  openGraph: {
    title: "Βρείτε Σταθερά Επαγγέλματα Φροντίδας Ηλικιωμένων στην Ελλάδα | MaziCare",
    description: "Εγγραφείτε στο δίκτυο επαγγελματιών φροντιστών της MaziCare. Δίκαιη πληρωμή, ευέλικτα ωράρια και συνεχής υποστήριξη. Κάντε αίτηση σήμερα.",
    url: `${siteConfig.url}/for-caregivers`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Βρείτε Σταθερά Επαγγέλματα Φροντίδας Ηλικιωμένων στην Ελλάδα | MaziCare",
    description: "Εγγραφείτε στο δίκτυο επαγγελματιών φροντιστών της MaziCare. Δίκαιη πληρωμή, ευέλικτα ωράρια και συνεχής υποστήριξη. Κάντε αίτηση σήμερα.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/for-caregivers`,
    languages: {
      "el-GR": `${siteConfig.url}/el/for-caregivers`,
      "en": `${siteConfig.url}/for-caregivers`,
    },
  },
};

// For Caregivers Hero Component
function ForCaregiversHero() {
  return (
    <section className="bg-gradient-to-br from-accent to-background py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Βρείτε σταθερά επαγγέλματα φροντίδας ηλικιωμένων σε όλη την Ελλάδα
          </h1>
          
          {/* Value points */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Δίκαιη πληρωμή</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
              <svg className="h-5 w-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Ευέλικτα ωράρια</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
              <svg className="h-5 w-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">Επαληθευμένες οικογένειες</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="font-medium">Πλήρης υποστήριξη</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-foreground/90 mb-4">
              Δημιουργήστε μια επαγγελματική καριέρα βοηθώντας ελληνικές οικογένειες ενώ απολαμβάνετε σταθερό εισόδημα και ευκαιρίες επαγγελματικής ανάπτυξης.
            </p>
            <p className="text-lg text-foreground/90">
              Η MaziCare είναι η αξιόπιστη πλατφόρμα που συνδέει αφοσιωμένους φροντιστές με οικογένειες που πραγματικά εκτιμούν την εμπειρογνωμοσύνη τους.
            </p>
          </div>

          <a
            href="https://mazicare-webapp.vercel.app/signup?role=caregiver"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
          >
            Κάντε Αίτηση ως Φροντιστής
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Who Can Apply Component
function WhoCanApply() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ποιοι μπορούν να κάνουν αίτηση;
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            Ψάχνουμε για επαγγελματίες που είναι αφοσιωμένοι στην ποιοτική φροντίδα ηλικιωμένων
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-accent rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Είδη Επαγγελματιών</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-sidebar-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/90">Γηροκόμοι</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-sidebar-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/90">Αποκλειστικές νοσοκόμες</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-sidebar-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/90">Εγγεγραμμένες νοσοκόμες</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-sidebar-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/90">Βοηθοί οικιακής φροντίδας</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Ελάχιστη Εμπειρία</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-sidebar-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sidebar-primary font-bold">1-2</span>
                </div>
                <div>
                  <p className="text-foreground font-medium">Χρόνια εμπειρίας</p>
                  <p className="text-foreground/70 text-sm">Σε φροντίδα ηλικιωμένων</p>
                </div>
              </div>
              <p className="text-foreground/90">Απαιτούμε επαγγελματικές αναφορές και επαληθεύσιμη εμπειρία</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Πιστοποιήσεις & Εκπαίδευση</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-foreground/90">Πιστοποίηση CPR/Πρώτων Βοηθειών</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-foreground/90">Εξειδικευμένη εκπαίδευση σε φροντίδα ηλικιωμένων</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-foreground/90">Συνεχιζόμενη εκπαίδευση (προτιμώμενο)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-foreground/90">Έγκυρα επαγγελματικά δικαιώματα</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Απαιτήσεις Γλώσσας</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90">Ελληνικά</span>
                  <span className="text-sidebar-primary font-medium">Υποχρεωτικά</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90">Αγγλικά</span>
                  <span className="text-foreground/70">Συνιστώμενη</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90">Άλλες γλώσσες</span>
                  <span className="text-green-600">Συντελεί θετικά</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefits Component
function Benefits() {
  const benefits = [
    {
      title: "Πρόσβαση σε προ-ελεγμένες οικογένειες",
      description: "Οι οικογένειες μας αναζητούν συγκεκριμένα φροντίδα ηλικιωμένων και έχουν περάσει έλεγχο",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Ψηφιακά εργαλεία",
      description: "Πρόσβαση σε πλατφόρμα για διαχείριση ωραρίου, επικοινωνία και πληρωμές",
      icon: "📱"
    },
    {
      title: "Σύστημα αξιολόγησης και προφίλ",
      description: "Αποκτήστε αξιολογήσεις που ανταμείβουν την ποιοτική εργασία και ενισχύουν τη φήμη σας",
      icon: "⭐"
    },
    {
      title: "Υποστήριξη σε αντιστοίχιση και συμβάσεις",
      description: "Βοηθάμε στην εύρεση των κατάλληλων οικογενειών και παρέχουμε νομική υποστήριξη",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Οφέλη από τη συνεργασία με την MaziCare
          </h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
            Δημιουργήστε μια σταθερή επαγγελματική καριέρα με την υποστήριξη της κορυφαίας πλατφόρμας φροντίδας στην Ελλάδα
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-foreground/90">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5 border border-sidebar-primary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                "Βοηθάμε να βρείτε οικογένειες που ταιριάζουν πραγματικά με την εμπειρία και την προσωπικότητά σας."
              </h3>
              <p className="text-foreground/90">
                Ο στόχος μας είναι να δημιουργήσουν μακροχρόνιες, ικανοποιητικές συνεργασίες
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-sidebar-primary">100%</div>
                <div className="text-foreground/90">Επαληθευμένες οικογένειες</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Onboarding Process Component
function OnboardingProcess() {
  const steps = [
    {
      step: "1. Υποβολή αίτησης",
      description: "Βασικές πληροφορίες, εμπειρία και τοποθεσία",
      time: "10 λεπτά",
      docs: "Βιογραφικό, προσωπικά στοιχεία"
    },
    {
      step: "2. Επαλήθευση",
      description: "Ταυτότητα, πιστοποιητικά, αναφορές",
      time: "2-3 εργάσιμες",
      docs: "Αστυνομική ταυτότητα, πτυχία, αναφορές"
    },
    {
      step: "3. Συνέντευξη",
      description: "Βίντεο ή τηλεφωνική συνέντευξη",
      time: "30 λεπτά",
      docs: "Διατίθεται online"
    },
    {
      step: "4. Ενεργοποίηση προφίλ",
      description: "Το προφίλ σας ενεργοποιείται στην εφαρμογή",
      time: "24 ώρες",
      docs: "Ολοκληρωμένο προφίλ"
    },
    {
      step: "5. Λήψη προτάσεων",
      description: "Αρχίζετε να λαμβάνετε προσφορές εργασίας",
      time: "Αμέσως",
      docs: "Πρόσβαση σε εργασίες"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Η διαδικασία εγγραφής
          </h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
            Απλά βήματα για να ξεκινήσετε να λαμβάνετε προτάσεις εργασίας
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                {/* Step content */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-2">{step.step}</h3>
                    <p className="text-foreground/90 mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
                        <svg className="h-4 w-4 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-foreground">{step.time}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
                        <svg className="h-4 w-4 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm text-foreground">{step.docs}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute lg:relative left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 z-10">
                  <div className="w-12 h-12 bg-sidebar-primary rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Continuing from the ProfileGuide component that was cut off...

// Profile Guide Component (continued)
function ProfileGuide() {
    const profileFeatures = [
      {
        icon: "📸",
        title: "Επαγγελματική φωτογραφία",
        description: "Καθαρή, επαγγελματική φωτογραφία προσώπου που εμφανίζει εμπιστοσύνη"
      },
      {
        icon: "📝",
        title: "Σύντομο βιογραφικό σημείωμα",
        description: "Περιγραφή της προσέγγισής σας στη φροντίδα και των αξιών σας"
      },
      {
        icon: "🛠️",
        title: "Καταχωρημένες δεξιότητες",
        description: "Φροντίδα άνοιας, βοήθεια κινητικότητας, μετά από χειρουργείο, διατροφική υποστήριξη"
      },
      {
        icon: "🗓️",
        title: "Ημερολόγιο διαθεσιμότητας",
        description: "Ενημερωμένο ωράριο που δείχνει πότε είστε διαθέσιμος/η"
      },
      {
        icon: "🏆",
        title: "Αποκορυφώματα εμπειρίας",
        description: "Ειδικές περιπτώσεις, χρόνια εμπειρίας, επιτεύγματα"
      },
      {
        icon: "🌐",
        title: "Γλώσσες",
        description: "Ελληνικά, Αγγλικά (και άλλες αν χρειαστεί)"
      }
    ];
  
    return (
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Πώς φαίνεται ένα εξαιρετικό προφίλ;
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
              Οι καλύτερα ολοκληρωμένα προφίλ λάμβανουν περισσότερες προτάσεις εργασίας
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            {/* Profile Mockup */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-sidebar-primary/10 rounded-full flex items-center justify-center text-3xl">
                  👩⚕️
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Μαρία Κ.</h3>
                  <p className="text-foreground/70">Επαγγελματίας Φροντιστής</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-foreground/70">4.9/5 (42 αξιολογήσεις)</span>
                  </div>
                </div>
              </div>
  
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Δεξιότητες:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-accent px-3 py-1 rounded-full text-sm text-foreground">Φροντίδα άνοιας</span>
                    <span className="bg-accent px-3 py-1 rounded-full text-sm text-foreground">Βοήθεια κινητικότητας</span>
                    <span className="bg-accent px-3 py-1 rounded-full text-sm text-foreground">Μετά από χειρουργείο</span>
                  </div>
                </div>
  
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Διαθεσιμότητα:</h4>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-foreground/90">Δευτέρα - Παρασκευή, 08:00 - 18:00</span>
                  </div>
                </div>
  
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Γλώσσες:</h4>
                  <div className="flex gap-2">
                    <span className="bg-sidebar-primary/10 text-sidebar-primary px-3 py-1 rounded-full text-sm">Ελληνικά</span>
                    <span className="bg-sidebar-primary/10 text-sidebar-primary px-3 py-1 rounded-full text-sm">Αγγλικά</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Profile Features */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Τα στοιχεία που κάνουν τη διαφορά
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {profileFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 border border-border">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="bg-gradient-to-r from-sidebar-primary/10 to-green-50 border border-sidebar-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Συμβουλή από την ομάδα μας
            </h3>
            <p className="text-lg text-foreground/90 max-w-2xl mx-auto mb-6">
              "Οι οικογένειες διαβάζουν το προφίλ σας πριν κάνουν αίτηση. Περιγράψτε με ακρίβεια τις δεξιότητές σας και 
              προσθέστε μια προσωπική πινελιά για να ξεχωρίσετε."
            </p>
            <div className="text-sm text-foreground/70">
              - Η ομάδα υποστήριξης φροντιστών της MaziCare
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  // Pay and Jobs Component
  function PayAndJobs() {
    const jobTypes = [
      {
        type: "Ωριαία",
        description: "Προσαρμοσμένα ωράρια ανά ημέρα",
        rate: "€Χ-€Ψ ανά ώρα",
        bestFor: "Τις περισσότερες οικογένειες"
      },
      {
        type: "Ημερήσια",
        description: "Πλήρης ημέρα φροντίδας",
        rate: "€ΧΧ-€ΨΨ ανά ημέρα",
        bestFor: "Συνέχεια φροντίδας"
      },
      {
        type: "Ζωντανή φροντίδα",
        description: "Πλήρης διαμονή",
        rate: "Εβδομαδιαία/Μηνιαία",
        bestFor: "Πλήρη υποστήριξη"
      },
      {
        type: "Βάρδιες νύχτας",
        description: "Νυχτερινή φροντίδα",
        rate: "Διπλή αποζημίωση",
        bestFor: "Ειδικές ανάγκες"
      }
    ];
  
    return (
      <section className="pt-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

          <div className="mt-12 bg-white rounded-2xl p-6 border border-border text-center">
            <div className="text-sidebar-primary font-bold text-lg mb-2">
              💡 Για τους φροντιστές:
            </div>
            <p className="text-foreground/90">
              Η εγγραφή είναι <span className="font-semibold text-green-600">δωρεάν</span>. Υπάρχει ένα ποσοστό πλατφόρμας από κάθε κράτηση, 
              και βλέπετε τις καθαρές αποδοχές σας ξεκάθαρα στην εφαρμογή πριν αποδεχτείτε κάθε εργασία.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  // Training and Support Component
  function TrainingSupport() {
    const trainingResources = [
      {
        title: "Οδηγοί φροντίδας",
        description: "Βήμα-βήμα οδηγοί για διαφορετικές καταστάσεις υγείας",
        icon: "📚"
      },
      {
        title: "Βίντεο εκπαίδευσης",
        description: "Πρακτικές τεχνικές και βέλτιστες πρακτικές",
        icon: "🎬"
      },
      {
        title: "Βάση γνώσεων",
        description: "Απαντήσεις σε συχνές ερωτήσεις και προβλήματα",
        icon: "📖"
      },
      {
        title: "Webinars",
        description: "Ζωντανές συνεδρίες με ειδικούς του κλάδου",
        icon: "💻"
      }
    ];
  
    return (
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Εκπαίδευση και υποστήριξη
            </h2>
            <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
              Συνεχής εκπαίδευση και υποστήριξη για να αναπτύξετε τις δεξιότητές σας και να ανταποκριθείτε στις ανάγκες των οικογενειών
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {trainingResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow text-center">
                <div className="text-3xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                <p className="text-foreground/90">{resource.description}</p>
              </div>
            ))}
          </div>
  
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-accent rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Υποστήριξη από ειδικούς
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Ομάδα υποστήριξης φροντιστών</h4>
                    <p className="text-foreground/90">Αφιερωμένη ομάδα για ερωτήσεις και βοήθεια</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Νομική υποστήριξη</h4>
                    <p className="text-foreground/90">Βοήθεια με συμβάσεις και νομικά θέματα</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Επίλυση προβλημάτων</h4>
                    <p className="text-foreground/90">Μεσολάβηση και υποστήριξη σε προκλήσεις</p>
                  </div>
                </li>
              </ul>
            </div>
  
            <div className="bg-gradient-to-br from-sidebar-primary/5 to-white rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Κάθε φροντιστής λαμβάνει:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-foreground/90">Πρόσβαση σε εκπαιδευτικό υλικό:</span>
                  <span className="font-semibold text-sidebar-primary">Αμέσως μετά την εγγραφή</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-foreground/90">Συνεχής ενημέρωση:</span>
                  <span className="font-semibold text-sidebar-primary">Νέες τεχνικές και καλύτερες πρακτικές</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/90">Πιστοποιητικά συμμετοχής:</span>
                  <span className="font-semibold text-sidebar-primary">Για επιλεγμένα προγράμματα εκπαίδευσης</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default function ForCaregiversPage() {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <HeroStrip />
        <main>
          <ForCaregiversHero />
          <WhoCanApply />
          <Benefits />
          <OnboardingProcess />
          <ProfileGuide />
          <PayAndJobs />
          <TrainingSupport />
          <div className="bg-gradient-to-r from-primary to-sidebar-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Έτοιμοι να ξεκινήσετε την επαγγελματική σας καριέρα;
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Εγγραφείτε εκατοντάδες επαγγελματίες φροντιστές που κάνουν τη διαφορά σε όλη την Ελλάδα
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://mazicare-webapp.vercel.app/signup?role=caregiver"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-primary-foreground md:py-4 md:text-lg md:px-10"
                >
                  Κάντε Αίτηση ως Φροντιστής
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10"
                >
                  Ρωτήστε την Ομάδα μας
                </a>
              </div>
              <p className="text-primary-foreground/80 text-sm mt-6">
                Χωρίς δεσμεύσεις • Χωρίς πιστωτική κάρτα
              </p>
            </div>
          </div>
        </main>
        <Footer />
        <Toaster />
      </div>
    );
  }