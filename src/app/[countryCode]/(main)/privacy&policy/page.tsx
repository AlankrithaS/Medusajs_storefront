import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto py-12 px-6 text-gray-800">
    <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Privacy Policy</h1>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Placing an Order</h2>
      <p className="mb-4">
        Browse the <strong>Swarnika Heritage by Alankritha</strong> catalogue to make your purchase. Select the item you
        wish to order, enter the desired quantity, and click on “Order”.
      </p>
      <p className="mb-4">
        Once your order contains all the desired items and quantities, click on the “Checkout” link.
        Provide your shipping and payment information. Review the Payment Options and choose the one that suits you.
      </p>
      <p className="mb-4">
        Upon successful payment, your order will be processed and shipped as per our timelines. See Shipping Policy for more.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>
      <p className="mb-4">
        We accept the following domestic payment methods:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Domestic Credit and Debit Cards (Visa/MasterCard)</li>
        <li>VISA Debit Cards</li>
        <li>UPI Payments</li>
      </ul>
      <p className="mb-4 font-semibold">Note:</p>
      <p className="mb-4">
        We do not accept international cards or payments. Please ensure your card is issued by an Indian bank.
      </p>
      <p className="mb-4">
        For card transactions, enter your 16-digit number, expiry date, and 3-digit CVV. Ensure your card is enrolled in VBV or MSC.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Pricing Policy</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Prices are subject to change without notice.</li>
        <li>All prices are in INR and inclusive of GST.</li>
        <li>Billing will occur based on price at time of shipping.</li>
        <li>GST is applicable as per Indian law.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Payment Security</h2>
      <p className="mb-4">
        Transactions are secured using SSL encryption. Look for the padlock icon in your browser during checkout.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Orders ship from our warehouse in Bangalore, Karnataka.</li>
        <li>Shipping available only within India.</li>
        <li>Delivery schedule: Monday to Saturday (excluding public holidays).</li>
        <li>Signatures or OTP may be required upon delivery.</li>
        <li>Swarnika is not responsible for damage post-delivery.</li>
      </ul>
      <p className="mb-4">
        Claims for damages or shortages must be made within 48 hours of delivery.
      </p>
      <p className="mb-4">
        Shipping costs vary based on product size, weight, and location. Charges will be visible at checkout.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Returns & Refund Policy</h2>
      <p className="mb-4">
        We do not accept returns or offer refunds for hygiene reasons. Replacements may be offered in special cases such as damage in transit.
      </p>
      <p className="mb-4">
        Contact us within 48 hours at <a href="mailto:info@haappyherbs.com" className="text-blue-600 underline">info@haappyherbs.com</a> with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Order Number</li>
        <li>Invoice</li>
        <li>Issue details</li>
        <li>Photos/videos with batch details, product seal, spillage, packaging, and outer box</li>
      </ul>
      <p className="mb-4">
        Once verified, our team will respond within 3 working days and initiate a reverse pick-up if approved.
      </p>
      <p className="mb-4">
        Returns must include the original product, receipt, and complaint document.
      </p>
      <p className="mb-4">
        Replacements are processed within 24 hours post product receipt.
      </p>
      <h3 className="text-lg font-semibold mt-6 mb-2">Returns Not Accepted If:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Product is used</li>
        <li>Request is made after 48 hours</li>
        <li>Tags/labels are missing or tampered</li>
      </ul>
      <h3 className="text-lg font-semibold mt-6 mb-2">When Are Refunds Issued?</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Only if product is damaged and no replacement is available</li>
        <li>Refund after return verification at our warehouse</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
      <p className="mb-4">
        Once an order is placed on our website, it cannot be cancelled. No refunds are issued for cancellations.
      </p>
    </section>

    <section className="pt-6 border-t text-sm text-gray-600">
      <p className="mb-1">Email: <a href="mailto:hello@swarnikaheritage.com" className="text-blue-600 underline">hello@swarnikaheritage.com</a></p>
      <p>Phone: +91-98765-43210</p>
    </section>
  </div>
);

export default PrivacyPolicy;
