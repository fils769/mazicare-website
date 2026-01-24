// components/sections/AboutSection.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Globe, Trophy } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ποιοι Είμαστε */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#030213] mb-8">
            Ποιοι Είμαστε
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-[#717182] leading-relaxed">
              Η MaziCare είναι μια ελληνική ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων, 
              σχεδιασμένη για να υποστηρίζει οικογένειες με αξιοπρέπεια, ασφάλεια και καινοτομία. 
              Η ιδέα γεννήθηκε μέσα από προσωπική εμπειρία φροντίδας στην ελληνική επαρχία, 
              αποκαλύπτοντας τις πραγματικές ανάγκες των ηλικιωμένων και των ανθρώπων τους.
            </p>
          </div>
        </div>

        {/* Οι Βασικές Μας Αξίες */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-[#030213] mb-16">
            Οι Βασικές μας Αξίες
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">Ενσυναίσθηση</h4>
                <p className="text-[#717182]">
                  Τοποθετούμε τις οικογένειες και τους ηλικιωμένους στο επίκεντρο κάθε απόφασης.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">Εμπιστοσύνη</h4>
                <p className="text-[#717182]">
                  Επαληθεύουμε κάθε φροντιστή και προστατεύουμε κάθε προσωπικό δεδομένο.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">Πολιτισμική Ευαισθησία</h4>
                <p className="text-[#717182]">
                  Σεβόμαστε τις ελληνικές παραδόσεις, τη γλώσσα και τη δυναμική της οικογένειας.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-purple-500" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">Αριστεία</h4>
                <p className="text-[#717182]">
                  Δεσμευόμαστε για συνεχή βελτίωση των υπηρεσιών και των προτύπων μας.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}