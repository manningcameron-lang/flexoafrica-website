// app/policies/page.jsx — flexoafrica-website repo
export const metadata = {
  title: 'Policies — Flexo Africa',
  description:
    'Refund, privacy, terms and conditions, shipping, and exchange policies for Flexo Africa (Pty) Ltd.',
};

export default function PoliciesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ink text-white py-20">
        <div className="container-x">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Policies</h1>
          <p className="mt-4 text-white/70 max-w-xl text-lg">
            Refund, privacy, terms and conditions, shipping, and exchange policies
            for Flexo Africa (Pty) Ltd.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="container-x py-16 space-y-16 max-w-3xl">

        {/* 1. REFUND POLICY */}
        <section id="refund">
          <h2 className="text-2xl font-bold text-ink mb-6">1. Refund Policy</h2>
          <p className="text-slate-600 mb-4">
            Flexo Africa is committed to delivering quality services. Refunds are
            handled as follows:
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Plate Brokerage</h3>
          <p className="text-slate-600 mb-3">
            Once a plate order has been submitted to our supplier on your behalf,
            it cannot be cancelled or refunded, as plates are produced to your
            specific artwork and specifications. If a plate arrives defective or
            materially different from the approved specification, please refer to
            our Exchange Policy below.
          </p>
          <p className="text-slate-600">
            If an order is cancelled before submission to the supplier, a full
            refund will be issued less any administration fee already incurred.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">
            Studio Services (Mock-ups, Renderings, Short Runs)
          </h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li><strong>Not yet started:</strong> Full refund on request.</li>
            <li>
              <strong>In progress:</strong> Partial refund at our discretion,
              based on work completed to date.
            </li>
            <li>
              <strong>Completed and delivered:</strong> No refund once the final
              file has been delivered, unless the work does not meet the agreed
              brief.
            </li>
          </ul>

          <h3 className="font-semibold text-ink mt-6 mb-2">How to Request a Refund</h3>
          <p className="text-slate-600">
            Email{' '}
            <a href="mailto:sales@flexoafrica.com" className="text-accent hover:underline">
              sales@flexoafrica.com
            </a>{' '}
            with your job number and the reason for your request. We will respond
            within 2 business days.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* 2. PRIVACY POLICY */}
        <section id="privacy">
          <h2 className="text-2xl font-bold text-ink mb-6">2. Privacy Policy</h2>
          <p className="text-slate-600 mb-4">
            Flexo Africa respects your privacy and is committed to protecting your
            personal information in accordance with the Protection of Personal
            Information Act (POPIA), Act 4 of 2013.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Information We Collect</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Contact details: name, email address, phone number, company name</li>
            <li>Job and artwork information submitted via quote requests or the client portal</li>
            <li>Payment information (processed securely via PayFast — we do not store card details)</li>
            <li>Website usage data via standard server logs</li>
          </ul>

          <h3 className="font-semibold text-ink mt-6 mb-2">How We Use Your Information</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>To fulfil your orders and communicate job status</li>
            <li>To send quotes, invoices, and service updates</li>
            <li>To improve our services and website</li>
            <li>To comply with legal or regulatory obligations</li>
          </ul>

          <h3 className="font-semibold text-ink mt-6 mb-2">Sharing of Information</h3>
          <p className="text-slate-600">
            We do not sell or rent your personal information to third parties. We
            may share information with trusted suppliers and couriers only to the
            extent necessary to fulfil your order.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Data Retention</h3>
          <p className="text-slate-600">
            We retain customer records for a minimum of 5 years for accounting and
            legal purposes, after which data is securely deleted.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Your Rights</h3>
          <p className="text-slate-600">
            You have the right to access, correct, or request deletion of your
            personal information. Contact us at{' '}
            <a href="mailto:sales@flexoafrica.com" className="text-accent hover:underline">
              sales@flexoafrica.com
            </a>.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* 3. TERMS AND CONDITIONS */}
        <section id="terms">
          <h2 className="text-2xl font-bold text-ink mb-6">3. Terms and Conditions</h2>

          <h3 className="font-semibold text-ink mt-6 mb-2">Acceptance</h3>
          <p className="text-slate-600">
            By placing an order or using any Flexo Africa service, you agree to
            these terms. They apply to all transactions between Flexo Africa
            (Pty) Ltd and the customer.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Services</h3>
          <p className="text-slate-600">
            Flexo Africa provides flexographic plate brokerage, studio services
            (mock-ups, 3D renderings, short digital runs), and related prepress
            services. All work is carried out to the customer&apos;s supplied
            specifications.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Artwork and Intellectual Property</h3>
          <p className="text-slate-600 mb-3">
            The customer warrants that they own or have the right to use all
            artwork, logos, and design files submitted to Flexo Africa. Flexo
            Africa accepts no liability for intellectual property infringements
            arising from customer-supplied artwork.
          </p>
          <p className="text-slate-600">
            All original work created by Flexo Africa remains the property of
            Flexo Africa until payment is received in full.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Accuracy of Specifications</h3>
          <p className="text-slate-600">
            The customer is responsible for verifying all specifications
            (dimensions, colours, substrate, print process) before approving an
            order. Flexo Africa will not be liable for plates produced to
            incorrect customer-supplied specifications.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Payment</h3>
          <p className="text-slate-600">
            Payment is due as per the terms stated on each invoice. Orders will
            not be processed or dispatched until payment is confirmed. We accept
            EFT and card payments via PayFast.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Limitation of Liability</h3>
          <p className="text-slate-600">
            Flexo Africa&apos;s liability for any claim is limited to the value of the
            specific order in question. We are not liable for consequential losses
            including production downtime, lost profits, or secondary costs.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Governing Law</h3>
          <p className="text-slate-600">
            These terms are governed by the laws of the Republic of South Africa.
            Any disputes will be resolved in the jurisdiction of KwaZulu-Natal.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* 4. SHIPPING POLICY */}
        <section id="shipping">
          <h2 className="text-2xl font-bold text-ink mb-6">4. Shipping Policy</h2>

          <h3 className="font-semibold text-ink mt-6 mb-2">Delivery Areas</h3>
          <p className="text-slate-600">
            We deliver to customers across South Africa (Durban, Cape Town,
            Gauteng, and other regions), as well as internationally to Kenya,
            Angola, Zimbabwe, and Mauritius. Contact us for other African
            destinations.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Lead Times</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li><strong>Standard:</strong> 3 to 5 working days from artwork approval</li>
            <li><strong>Urgent:</strong> Accommodated where possible — contact us to confirm availability</li>
          </ul>
          <p className="text-slate-600 mt-3">
            Lead times are estimates and may be affected by supplier production
            schedules or courier delays outside our control.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Shipping Costs</h3>
          <p className="text-slate-600">
            Shipping costs are quoted per order and included on your invoice.
            Costs depend on destination, package weight, and urgency.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Risk and Title</h3>
          <p className="text-slate-600">
            Risk of loss or damage transfers to the customer once goods are
            dispatched to the courier. Flexo Africa is not liable for damage or
            loss in transit, but we will assist in lodging courier claims where
            applicable.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Tracking</h3>
          <p className="text-slate-600">
            Courier tracking information will be shared via the client portal or
            by email once your order is dispatched.
          </p>
        </section>

        <hr className="border-slate-200" />

        {/* 5. EXCHANGE POLICY */}
        <section id="exchange">
          <h2 className="text-2xl font-bold text-ink mb-6">5. Exchange Policy</h2>

          <h3 className="font-semibold text-ink mt-6 mb-2">Defective Plates</h3>
          <p className="text-slate-600 mb-3">
            If a plate arrives defective (manufacturing fault or Flexo Africa
            specification error), notify us within{' '}
            <strong>7 calendar days</strong> of receipt. We will arrange a
            replacement at no cost to you.
          </p>
          <p className="text-slate-600">
            Please retain original packaging and provide photographs of the
            defect. Plates must not have been mounted or used before the exchange
            request is logged.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Customer-Supplied Artwork Errors</h3>
          <p className="text-slate-600">
            Plates produced to customer-approved artwork that contains errors
            (incorrect dimensions, colour values, trapping, etc.) are not
            eligible for a free exchange. A replacement plate will be quoted at
            standard rates.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">Studio Work</h3>
          <p className="text-slate-600">
            Two rounds of revisions are included with all studio deliverables.
            Additional revision rounds will be quoted separately. We do not
            exchange or replace digital files once the final revision round has
            been approved.
          </p>

          <h3 className="font-semibold text-ink mt-6 mb-2">How to Request an Exchange</h3>
          <p className="text-slate-600">
            Email{' '}
            <a href="mailto:sales@flexoafrica.com" className="text-accent hover:underline">
              sales@flexoafrica.com
            </a>{' '}
            with your job number, a description of the issue, and photographs.
            We will respond within 2 business days.
          </p>
        </section>

        <p className="text-sm text-slate-400 pt-4">
          Last updated: June 2026 · Flexo Africa (Pty) Ltd · Durban, KwaZulu-Natal, South Africa.
        </p>
      </div>
    </main>
  );
}
