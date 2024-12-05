import Link from "next/link";
import React from "react";

const TermsService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-800 pb-[200px]">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4 font-light text-sm">Last Updated: Oct 30, 2024</p>

      <h2 className="text-2xl font-semibold mb-2">1. Services Provided</h2>
      <p className="mb-4">
        Mart Transit LLC specializes in the transportation of vehicles across
        the United States using car hauler equipment. We operate with the
        highest standards of care and professionalism to ensure the safe and
        timely delivery of your vehicles.
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
      <p className="mb-4">By using our services, you confirm that:</p>
      <ul className="list-disc list-inside mb-4">
        <li>You are at least 18 years old.</li>
        <li>You have the legal authority to enter into this agreement.</li>
        <li>
          You are the legal owner of the vehicle(s) being transported or have
          authorization to arrange their transport.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        3. Customer Responsibilities
      </h2>
      <p className="mb-4">Customers are responsible for:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Ensuring that vehicles are in a condition suitable for transport
          (e.g., no major fluid leaks, properly inflated tires).
        </li>
        <li>
          Removing all personal belongings and valuables from the vehicle prior
          to transport. Mart Transit LLC is not liable for any items left inside
          the vehicle.
        </li>
        <li>Providing accurate pickup and delivery addresses.</li>
        <li>
          Being available (or ensuring an authorized representative is
          available) for vehicle pickup and delivery.
        </li>
        <li>
          Paying all fees associated with the transport service in accordance
          with the agreed terms.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        4. Vehicle Condition and Inspection
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          A pre-transport inspection will be conducted at the time of pickup to
          document the vehicle’s condition. A similar inspection will be
          conducted upon delivery.
        </li>
        <li>
          Any damage identified during delivery that is not listed in the
          initial inspection must be reported immediately to the driver and
          noted on the Bill of Lading.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">5. Pricing and Payment</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Pricing is determined based on factors such as vehicle type, distance,
          and special requirements.
        </li>
        <li>
          Payment terms will be outlined in the service agreement or invoice
          provided to the Customer.
        </li>
        <li>
          Late payments may incur additional fees as specified in the service
          agreement.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        6. Cancellations and Refunds
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Customers may cancel their booking by providing written notice at
          least 2 days before the scheduled pickup.
        </li>
        <li>
          Refund eligibility and fees for cancellations are outlined in our
          cancellation policy.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        7. Limitations of Liability
      </h2>
      <p className="mb-4">Mart Transit LLC is not liable for:</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          Delays caused by weather, road conditions, or unforeseen
          circumstances.
        </li>
        <li>
          Damage caused by mechanical issues or pre-existing conditions of the
          vehicle.
        </li>
        <li>
          Loss of or damage to personal belongings left inside the vehicle.
        </li>
      </ul>
      <p className="mb-4">
        Our liability for vehicle damage is limited to the coverage provided by
        our insurance policy. A copy of the policy is available upon request.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Insurance</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          All vehicles transported by Mart Transit LLC are covered under our
          cargo insurance policy, which protects against damage caused during
          transport.
        </li>
        <li>
          Customers are encouraged to maintain their own comprehensive insurance
          coverage for additional protection.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">9. Prohibited Items</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Vehicles may not contain hazardous materials, illegal substances, or
          weapons. Discovery of such items may result in cancellation of
          transport and notification of law enforcement.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">10. Dispute Resolution</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          In the event of a dispute, both parties agree to first attempt
          resolution through informal negotiations.
        </li>
        <li>
          If unresolved, disputes will be subject to binding arbitration under
          the laws of the state in which Mart Transit LLC is headquartered.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">11. Governing Law</h2>
      <p className="mb-4">
        These Terms of Service are governed by the laws of the State of Ohio,
        without regard to its conflict of law principles.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        12. Changes to Terms of Service
      </h2>
      <p className="mb-4">
        We reserve the right to modify these Terms of Service at any time.
        Customers will be notified of significant changes via email or through
        our website. Continued use of our services constitutes acceptance of the
        updated terms.
      </p>

      <h2 className="text-2xl font-semibold mb-2">13. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms of Service,
        please contact us at:
      </p>
      <p className="mb-4">Mart Transit LLC</p>
      <p className="mb-4">7509 Creekwood Ct Apt 15D North Royalton, OH 44133</p>
      <p className="mb-4">Phone: 216 858 5758</p>
      <p className="mb-4">Email: mart.transit.dispatch@gmail.com</p>
    </div>
  );
};

export default TermsService;
