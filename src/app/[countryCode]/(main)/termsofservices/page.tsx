export default function TermsPage() {
  return (
    <div className="content-container max-w-4xl mx-auto py-12 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Terms & Conditions</h1>

      <p className="text-lg text-center text-gray-600 mb-10">
        Welcome to <strong>Swarnika Heritage</strong>. Swarnika Heritage provides you with the
        content and services available on this website, subject to the following Terms and
        Conditions, our Privacy Policy, Payment Policy, and other conditions and policies
        throughout the website. By accessing or using this site, you agree to be bound by all
        applicable terms without limitation.
      </p>

      <div className="space-y-10 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Privacy</h2>
          <p>
            Please review our <a href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</a>
            to understand how we handle your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Payment Policy</h2>
          <p>
            Please refer to our <a href="/payment-policy" className="text-blue-600 underline hover:text-blue-800">Payment Policy</a> for
            full details on our purchase process. We only accept domestic orders. International
            shipping and duties are not applicable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Products & Services for Personal Use</h2>
          <p>
            All products listed on Swarnika Heritage are for personal use only. You may not resell
            or commercially distribute them. We reserve the right to cancel or limit orders we
            believe breach these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Accuracy of Information</h2>
          <p>
            We strive to ensure all product information is accurate and up-to-date. However,
            Swarnika Heritage makes no warranties about the completeness or reliability of
            descriptions, images, or specifications.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Intellectual Property</h2>
          <p>
            All website content, including text, logos, images, and designs, is the property of
            Swarnika Heritage or its licensors. You may not use or copy any materials without prior
            written consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Limited Licenses</h2>
          <p>
            We grant you a limited, revocable license to use our website for personal, non-commercial
            purposes only. Unauthorized use of the website or its content will terminate the granted
            license without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your Obligations</h2>
          <p>
            You agree to comply with these terms and act in accordance with all laws and good faith.
            You must not tamper with, misuse, or disrupt our website or services in any way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Third-Party Links</h2>
          <p>
            Swarnika Heritage is not responsible for the content or accuracy of third-party websites
            linked from our site. Visiting external links is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Submissions & User Content</h2>
          <p>
            Any material submitted to Swarnika Heritage (ideas, suggestions, content, etc.) will be
            considered non-confidential. You agree that you own or have rights to such content and
            that it does not infringe third-party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Copyright Complaints</h2>
          <p>
            To report potential copyright violations, email us at <a href="mailto:contact@swarnikaheritage.com" className="text-blue-600 underline hover:text-blue-800">contact@swarnikaheritage.com</a>
            with your name, contact details, and the material in question.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Limitation of Liability</h2>
          <p>
            Swarnika Heritage is not liable for any indirect, incidental, or consequential damages.
            Product use is at the customer’s discretion, and we recommend reviewing ingredients and
            instructions before use.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Swarnika Heritage from any claims, losses, or
            damages arising from your use of the website or any violation of these terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Disputes</h2>
          <p>
            All disputes are governed by Indian law and shall be resolved in the courts of New Delhi.
            Any unresolved matter may be referred to arbitration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Electronic Notices</h2>
          <p>
            You consent to receive all communications from Swarnika Heritage electronically. To revoke
            consent, email us at <a href="mailto:contact@swarnikaheritage.com" className="text-blue-600 underline hover:text-blue-800">contact@swarnikaheritage.com</a>
            and discontinue use of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">General</h2>
          <p>
            These terms constitute the full agreement between you and Swarnika Heritage. We reserve
            the right to modify them at any time. Continued use after changes constitutes your
            acceptance.
          </p>
        </section>

        <footer className="pt-6 text-sm text-gray-500 border-t mt-10">
          © {new Date().getFullYear()} Swarnika Heritage. All rights reserved.
        </footer>
      </div>
    </div>
  );
}