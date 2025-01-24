import Link from "next/link";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 pb-[200px]">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4 font-light text-sm">Last Updated: Jan 24, 2025</p>

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
      <p className="mb-4">
        The Phone Numbers obtained as part of the SMS consent process will not
        be shared with third parties for marketing purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        3. Types of SMS Communications
      </h2>
      <p className="mb-4">
        If you have consented to receive text messages from Mart Transit LLC,
        you may receive SMS communications related to: (Appointment reminders,
        meetings, and follow-ups on cases.)
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Customers and Guests: Updates regarding your orders, deliveries, or
          other relevant information.
        </li>
        <li>
          Applicants: Information about your application status, onboarding
          materials, or other employment-related updates.
        </li>
        <p className="mb-4">
          For Example: Hello Thank you for contacting Mart Transit LLC, how can
          we help you? Reply Stop to opt-out at any time. Message and data rates
          may apply, for assistance, text "HELP" or visit our{" "}
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
        </p>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">4. Message Frequency</h2>
      <p className="mb-4">
        Our SMS message frequency will be from 50 to 1000 text messages daily
        across all users. 
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        5. Potential Fees for SMS Messaging
      </h2>
      <p className="mb-4">
        Many carriers charge a fee for each message sent or received. This can
        vary depending on the carrier's pricing structure and whether the
        message is sent domestically or internationally.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Opt-In Method</h2>
      <p className="mb-4">
        Customer will Opt-In for SMS messaging from Mart Transit LLC through
        (intake forms, Verbally, filling out a paper form) ({" "}
        <Link href={"https://www.mart-transit.pp.ua/"}>
          <span className="underline cursor-pointer text-linkColor">
            https://www.mart-transit.pp.ua/
          </span>
        </Link>{" "}
        - Contact US URL ), this agreement for SMS will not be shared with third
        parties for marketing purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Opt-out</h2>
      <p className="mb-4">
        Customer will be able to opt out of SMS messaging from  Mart Transit LLC
        by replying STOP at any time to any received SMS message, once opted-out
        they will receive no further SMS communication. They can Opt back In at
        any time by replying START
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        8. Standard Messaging Disclosures
      </h2>
      <p className="mb-4">
        Message and data rates may apply. Standard messaging rates will be
        charged by your mobile service provider. You can opt-out of receiving
        SMS messages at any time by texting "STOP" to the number from which you
        received the message.
      </p>
      <p className="mb-4">
        For assistance, text "HELP" or visit our {" "}
        <Link href={"/privacy-policy"}>
          <span className="underline cursor-pointer text-linkColor">
            Privacy Policy
          </span>
        </Link>{" "}
         and {" "}
        <Link href={"/terms-service"}>
          <span className="underline cursor-pointer text-linkColor">
            Terms of Service
          </span>
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-2">9. Privacy</h2>
      <p className="mb-4">
        We respect your privacy and will only use the information you provide to
        communicate with you via SMS as outlined above. Your personal data will
        not be shared with third parties unless required by law or as necessary
        to deliver the requested service.
      </p>

      <h2 className="text-2xl font-semibold mb-2">10. Modifications</h2>
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
