import Link from "next/link";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 pb-[200px]">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4 font-light text-sm">Last Updated: Oct 30, 2024</p>

      <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
      <p className="mb-4">
        Welcome to Mart Transit LLC. By accessing or using our services,
        including receiving SMS communications, you agree to comply with and be
        bound by these Terms and Conditions. If you do not agree with these
        terms, please do not engage with our services.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        2. Consent for SMS Communication
      </h2>
      <p className="mb-4">
        By providing your consent to receive SMS communications, you acknowledge
        and agree to receive text messages from Mart Transit LLC at the phone
        number you provide. Information obtained as part of the SMS consent
        process will not be shared with third parties.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        3. Types of SMS Communications
      </h2>
      <p className="mb-4">
        If you have consented to receive text messages, you may receive SMS
        communications related to the following:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Customers and Guests: Updates regarding your orders, deliveries, or
          other relevant information.
        </li>
        <li>
          ob Applicants: Information about your application status, onboarding
          materials, or other employment-related updates.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        4. Standard Messaging Disclosures
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Message and data rates may apply. Standard messaging rates will be
          charged by your mobile service provider.
        </li>
        <li>
          You can opt-out of receiving SMS messages at any time by texting
          "STOP" to the number from which you received the message.
        </li>
        <li>
          For assistance, text "HELP" or visit our{" "}
          <Link href={"/privacy-policy"}>
            <span className="underline cursor-pointer text-linkColor">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href={"/terms-service"}>
            <span className="underline cursor-pointer text-linkColor">
              Terms of Service
            </span>
          </Link>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Privacy</h2>
      <p className="mb-4">
        We respect your privacy and will only use the information you provide to
        communicate with you via SMS as outlined above. Your personal data will
        not be shared with third parties unless required by law or as necessary
        to deliver the requested service.
      </p>
      <h2 className="text-2xl font-semibold mb-2">6. Modifications</h2>
      <p className="mb-4">
        We reserve the right to update or modify these Terms and Conditions at
        any time. Any changes will be posted on this page with an updated
        revision date. By continuing to engage with our services, you agree to
        be bound by any changes to these terms.
      </p>
    </div>
  );
};

export default TermsAndConditions;
