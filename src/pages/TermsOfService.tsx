import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

          <p className="text-muted-foreground mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6">
            By accessing or using the RootOps Technologies website, you agree to
            be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Use of Our Services
          </h2>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in
            accordance with applicable laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Intellectual Property
          </h2>
          <p className="mb-4">
            All content on this website, including text, graphics, and logos, is
            the property of RootOps Technologies and may not be used without
            permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not liable for any damages arising from the use of our
            website or services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Changes to These Terms
          </h2>
          <p className="mb-4">
            We may update these Terms of Service from time to time. Continued
            use of the website constitutes acceptance of the updated terms.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
