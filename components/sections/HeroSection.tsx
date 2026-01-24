// components/sections/HeroSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Users, Heart } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#ececf0] via-white to-[#e9ebef] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Main Title */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#030213] leading-tight mb-6 tracking-tight">
                Αξιόπιστη φροντίδα για τους αγαπημένους σας
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl lg:text-2xl text-[#717182] font-medium mb-8 leading-relaxed">
                Βρείτε τον κατάλληλο φροντιστή με ασφάλεια και διαφάνεια
              </p>

              {/* Description */}
              <div className="space-y-4 mb-10">
                <p className="text-lg text-[#030213]/90 leading-relaxed">
                  Η MaziCare συνδέει οικογένειες με επαληθευμένους φροντιστές σε όλη την Ελλάδα, 
                  παρέχοντας ολοκληρωμένη υποστήριξη και εγγύηση ποιότητας.
                </p>
                <p className="text-lg text-[#030213]/90 leading-relaxed">
                  Με λίγα βήματα, δημιουργείτε λογαριασμό, περιγράφετε τις ανάγκες του αγαπημένου σας προσώπου 
                  και λαμβάνετε προτάσεις από κατάλληλους φροντιστές.
                </p>
              </div>

              {/* How it Works Steps */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-[#030213] mb-6">
                  Πώς λειτουργεί για οικογένειες:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#030213] text-white rounded-full flex items-center justify-center mt-1">
                      <span className="font-bold">1</span>
                    </div>
                    <p className="text-[#030213]/90 pt-1">Δημιουργήστε δωρεάν λογαριασμό οικογένειας</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#030213] text-white rounded-full flex items-center justify-center mt-1">
                      <span className="font-bold">2</span>
                    </div>
                    <p className="text-[#030213]/90 pt-1">Συμπληρώστε τις βασικές πληροφορίες για το άτομο που χρειάζεται φροντίδα</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#030213] text-white rounded-full flex items-center justify-center mt-1">
                      <span className="font-bold">3</span>
                    </div>
                    <p className="text-[#030213]/90 pt-1">Σας προτείνουμε κατάλληλους φροντιστές και σας καθοδηγούμε στην επιλογή</p>
                  </div>
                </div>
              </div>

              {/* Reassurance Message */}
              <div className="bg-white p-6 rounded-xl border border-[rgba(0,0,0,0.08)] shadow-sm mb-8">
                <div className="flex items-start gap-4">
                  <Heart className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-[#030213] mb-2">
                      Η ομάδα της MaziCare είναι δίπλα σας σε κάθε βήμα, για να νιώθετε σίγουροι για την επιλογή σας.
                    </p>
                    <p className="text-[#717182]">
                      Μπορείτε να αλλάξετε φροντιστή ή να προσαρμόσετε το πρόγραμμα φροντίδας ανά πάσα στιγμή μέσω του ψηφιακού σας dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => {
                    window.location.href = "/find-care"
                  }}
                  className="text-lg px-8 py-6 bg-[#030213] hover:bg-[#030213]/90 text-white rounded-lg"
                >
                  Ψάχνετε φροντίδα
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/for-caregivers";
                  }}
                  className="text-lg px-8 py-6 border-2 border-[#030213] text-[#030213] hover:bg-[#030213]/5 rounded-lg"
                >
                  Ψάχνετε δουλειά
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-[#030213] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#030213]">Επαληθευμένοι Φροντιστές</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-[#030213] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#030213]">Έλεγχος Ιστορικού</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[#030213] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#030213]">Συνεχής Υποστήριξη</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image and Caregiver Section */}
          <div className="space-y-8">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/assets/bg_picture.png"
                  alt="Οικογένεια και φροντιστής μοιράζονται μια στιγμή"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xl font-semibold text-white">Αξιόπιστη φροντίδα για την οικογένειά σας</p>
                </div>
              </div>
            </div>

            {/* Caregiver Section */}
            <div className="bg-white p-8 rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-lg">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#030213] mb-4">
                  Εγγραφείτε ως φροντιστής
                </h3>
                <p className="text-lg text-[#717182] mb-4">
                  Βρείτε οικογένειες που χρειάζονται τις υπηρεσίες σας, με δίκαιους όρους και πλήρη υποστήριξη.
                </p>
                
                <div className="space-y-4 mb-6">
                  <p className="text-[#030213]/90">
                    Η MaziCare βοηθά επαγγελματίες φροντιστές να βρουν σταθερές συνεργασίες με οικογένειες σε όλη την Ελλάδα.
                  </p>
                  <p className="text-[#030213]/90">
                    Δημιουργήστε το προφίλ σας, προβάλετε την εμπειρία και τις δεξιότητές σας, και συμμετέχετε σε μια σύντομη συνέντευξη με την ομάδα μας.
                  </p>
                </div>

                {/* Caregiver Steps */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[#030213] mb-4">
                    Βήματα εγγραφής φροντιστή:
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#030213] font-bold text-sm">1</span>
                      </div>
                      <p className="text-sm text-[#030213]/90">Δημιουργία λογαριασμού</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#030213] font-bold text-sm">2</span>
                      </div>
                      <p className="text-sm text-[#030213]/90">Συμπλήρωση στοιχείων</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#030213] font-bold text-sm">3</span>
                      </div>
                      <p className="text-sm text-[#030213]/90">Συνέντευξη</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                        <span className="text-[#030213] font-bold text-sm">4</span>
                      </div>
                      <p className="text-sm text-[#030213]/90">Ενεργοποίηση προφίλ</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => {
                  window.location.href = "/for-caregivers";
                }}
                className="w-full bg-[#030213] hover:bg-[#030213]/90 text-white py-6 text-lg rounded-lg"
              >
                Αίτηση ως Φροντιστής
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}