import NavBar from "@/components/quiz/NavBar";
import Footer from "@/components/quiz/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
            <p className="text-muted-foreground">
              At Profit Alliance AI, we are committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Quiz responses and preferences</li>
              <li>Usage data and analytics</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about our services</li>
              <li>Analyze usage patterns and optimize our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Licensed and regulated partners in your region (with your consent)</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information 
              from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Cookies and Tracking</h2>
            <p className="text-muted-foreground">
              We use cookies and similar tracking technologies to enhance your experience. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold text-foreground">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: <a href="mailto:contact@domain.com" className="text-primary hover:underline">contact@domain.com</a><br />
              Phone: <a href="tel:+447369283372" className="text-primary hover:underline">+44 736 9283 8372</a>
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
