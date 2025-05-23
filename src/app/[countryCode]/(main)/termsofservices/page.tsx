export default function TermsPage() {
  return (
    <div className="content-container py-8 text-ui-fg-base">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>Swarnika</strong>. By accessing and using our website
        (the "Site"), you agree to comply with and be bound by the following
        terms and conditions. If you do not agree, please do not use the Site.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. General</h2>
        <ul className="list-disc list-inside">
          <li>
            Swarnika reserves the right to change these Terms at any time
            without notice.
          </li>
          <li>
            Your continued use of the Site after changes means you accept the
            updated Terms.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Products and Services</h2>
        <ul className="list-disc list-inside">
          <li>All products and services are subject to availability.</li>
          <li>
            We reserve the right to discontinue or modify any product at any
            time.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Pricing and Payment</h2>
        <ul className="list-disc list-inside">
          <li>All prices are in INR and may change without notice.</li>
          <li>Full payment is required at the time of order.</li>
          <li>Payments are handled securely via third-party gateways.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Shipping and Delivery</h2>
        <ul className="list-disc list-inside">
          <li>Orders are processed within 1-3 business days.</li>
          <li>
            We are not responsible for shipping delays caused by third-party
            carriers.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Returns and Refunds</h2>
        <ul className="list-disc list-inside">
          <li>Returns are only accepted for damaged or incorrect items.</li>
          <li>
            Contact us within 48 hours of delivery at{" "}
            <a
              href="mailto:hello@swarnika.com"
              className="text-blue-600 underline"
            >
              hello@swarnika.com
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
        <ul className="list-disc list-inside">
          <li>All site content is the property of Swarnika.</li>
          <li>
            No content may be reproduced or used without written permission.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Privacy Policy</h2>
        <p>
          Please read our{" "}
          <a href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>{" "}
          to learn how we handle your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          8. Limitation of Liability
        </h2>
        <ul className="list-disc list-inside">
          <li>Swarnika is not liable for indirect or consequential damages.</li>
          <li>
            No guarantees are made about the accuracy or reliability of the site
            content.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
        <p>
          These terms are governed by the laws of India. Disputes will be
          resolved in the courts of New Delhi.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <ul className="list-disc list-inside">
          <li>
            Email:{" "}
            <a
              href="mailto:hello@swarnika.com"
              className="text-blue-600 underline"
            >
              hello@swarnika.com
            </a>
          </li>
          <li>
            Website:{" "}
            <a
              href="https://www.swarnika.com"
              className="text-blue-600 underline"
            >
              www.swarnika.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
