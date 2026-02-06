import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

          <p className="text-muted-foreground mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <p className="mb-6">
            RootOps Technologies ("we", "our", "us") values your privacy. This
            Privacy Policy explains how we collect, use, and protect your
            information when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information such as your name, email
            address, and message details when you submit forms on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To respond to inquiries</li>
            <li>To provide our services</li>
            <li>To improve our website and offerings</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Data Protection
          </h2>
          <p className="mb-4">
            We take reasonable measures to protect your data from unauthorized
            access or disclosure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:contact@rootopstechnologies.in"
              className="text-primary underline"
            >
              contact@rootopstechnologies.in
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
