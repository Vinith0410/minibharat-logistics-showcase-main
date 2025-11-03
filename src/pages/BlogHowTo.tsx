// File: src/pages/BlogHowTo.tsx
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendarDays, User, CheckCircle, MapPin } from "lucide-react";
import image  from "@/assets/services/Start-Logistics.jpg"

const BlogHowTo: React.FC = () => {
  useEffect(() => {
    document.title = "How to Start a Logistics Franchise: A Step-by-Step Guide | Mini Bharat";
    const meta = document.querySelector('meta[name="description"]');
    const desc =
      "Step-by-step guide to start a logistics franchise with practical checklists, cost estimate, legal tips, location selection and marketing strategies.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{
          backgroundImage:
            "url('https://minibharatlogistics.com/assets/front/img/breadcrumb_image_.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">How to Start a Logistics Franchise</h1>
          <p className="max-w-2xl mx-auto text-gray-200">
            A practical, step-by-step guide for entrepreneurs to build a successful delivery or courier franchise.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2"><User size={16}/> By Mini Bharat</span>
            <span className="flex items-center gap-2"><CalendarDays size={16}/> Updated: Nov 3, 2025</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main */}
          <article className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={image}
                alt="Start a Logistics Franchise"
                className="w-full h-full object-cover"
              />
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-4">Overview — Why a Logistics Franchise?</h2>
                <p className="text-gray-700 leading-relaxed">
                  The logistics and courier sector is expanding rapidly thanks to e-commerce and local delivery demand.
                  A franchise model reduces setup friction — you get brand support, processes, and access to a network while
                  staying entrepreneur-run. This guide walks through planning, finance, operations, compliance, marketing and growth.
                </p>

                {/* Step-by-step */}
                <section className="mt-8">
                  <h3 className="text-xl font-semibold mb-3">Step 1 — Research & Decide Your Franchise Model</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Choose between common franchise models:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Delivery Point / Pickup-Point:</strong> Low investment. A local shop handles drop-off and pickup.</li>
                    <li><strong>Local Express Partner:</strong> Moderate investment. Own small fleet and operations in a city/locality.</li>
                    <li><strong>Hub & Spoke / Regional Aggregator:</strong> Larger investment — warehousing + multi-vehicle operations.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 2 — Market & Location Analysis</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Use simple checks to validate demand:
                  </p>
                  <ul className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                    <li>Check local e-commerce density (shops, marketplaces, courier requests).</li>
                    <li>Footfall & accessibility — near markets, residential clusters, or colleges.</li>
                    <li>Competition: number of existing pickup points / local couriers.</li>
                  </ul>

                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg mb-6">
                    <MapPin size={20} className="text-primary" />
                    <div>
                      <strong className="block">Quick location checklist</strong>
                      <small className="text-gray-600">
                        Visibility from main road, parking availability, 24/7 or extended hours potential, and low rental cost.
                      </small>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Step 3 — Estimate Costs & Prepare Budget</h3>
                  <p className="text-gray-700 mb-3">Typical cost heads:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Franchise fee (if applicable)</li>
                    <li>Security deposit & rent</li>
                    <li>Furniture & shelving, computer, printer, weighing scale</li>
                    <li>Staff salary, initial working capital, utilities</li>
                    <li>Branding, signage, initial marketing</li>
                  </ul>

                  {/* Cost table */}
                  <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-3 py-2">Item</th>
                          <th className="text-left px-3 py-2">Estimated Cost (INR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="px-3 py-2">Franchise / Onboarding Fee</td>
                          <td className="px-3 py-2">10,000 - 50,000</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2">Shop Setup / Furniture</td>
                          <td className="px-3 py-2">20,000 - 60,000</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2">Equipment (PC, printer, scale)</td>
                          <td className="px-3 py-2">15,000 - 35,000</td>
                        </tr>
                        <tr className="border-t">
                          <td className="px-3 py-2">Working capital (1-2 months)</td>
                          <td className="px-3 py-2">30,000 - 80,000</td>
                        </tr>
                        <tr className="border-t font-semibold bg-gray-50">
                          <td className="px-3 py-2">Typical Initial Investment</td>
                          <td className="px-3 py-2">~ ₹75,000 - ₹2,25,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Step 4 — Legal & Compliance</h3>
                  <p className="text-gray-700 mb-3">
                    Basic paperwork you likely need:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Business registration (Proprietorship / GST / MSME if eligible)</li>
                    <li>Local municipal trade license (if required)</li>
                    <li>GST registration (if turnover crosses threshold)</li>
                    <li>Employee contracts, bank account for business</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 5 — Operations & Processes</h3>
                  <p className="text-gray-700 mb-3">
                    Establish simple SOPs (standard operating procedures) from day one:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Parcel intake & verification checklist</li>
                    <li>Labeling, scanning (if system), and storage locations</li>
                    <li>Pickup & dispatch timing, route planning (if you run delivery)</li>
                    <li>Returns handling and customer communication templates</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 6 — Technology & Tools</h3>
                  <p className="text-gray-700 mb-3">
                    Use simple tech to reduce friction:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>A lightweight TMS/portal from franchisor (most provide one)</li>
                    <li>Mobile phone + WhatsApp for customer updates</li>
                    <li>Cloud spreadsheet or simple billing software</li>
                    <li>Optional: QR/Barcode scanner and printer for faster handling</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 7 — Hiring & Training</h3>
                  <p className="text-gray-700 mb-3">
                    Hire trustworthy staff with clear roles. Train them on:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Customer service (polite pickup/drop handling)</li>
                    <li>Parcel verification & safety handling</li>
                    <li>Using the franchisor's portal & following SOPs</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 8 — Marketing & Growth</h3>
                  <p className="text-gray-700 mb-3">
                    Get initial traction using low-cost channels:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Signage & local flyers in nearby shops and housing complexes</li>
                    <li>WhatsApp groups, local Facebook/Instagram posts, Google My Business</li>
                    <li>Offer initial promotions: first free pickup, discounted COD handling etc.</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 9 — Financial Management & KPIs</h3>
                  <p className="text-gray-700 mb-3">
                    Track basic KPIs weekly:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Parcels handled per day</li>
                    <li>Average revenue per parcel</li>
                    <li>Operating cost per parcel</li>
                    <li>Customer satisfaction and complaints</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">Step 10 — Scale When Stable</h3>
                  <p className="text-gray-700 mb-3">
                    After 3-6 months of predictable operations and positive cash flow, consider:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Extending hours or adding a collection/packaging service</li>
                    <li>Adding last-mile delivery vehicles / gig drivers</li>
                    <li>Opening a second pickup point / franchise in nearby locality</li>
                  </ul>
                </section>

                {/* Quick checklist */}
                <section className="mt-8 bg-green-50 border border-green-100 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600" />
                    <div>
                      <strong className="block mb-1">Quick Starter Checklist</strong>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Choose franchise model & sign agreement</li>
                        <li>Confirm location & sign rent agreement</li>
                        <li>Complete equipment purchases and install portal</li>
                        <li>Hire & train 1–3 staff</li>
                        <li>Start operations + local marketing</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/get-a-quote"
                    className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg text-center"
                  >
                    Apply for Franchise
                  </a>
                  <a
                    href="/contact"
                    className="inline-block border border-primary text-primary px-6 py-3 rounded-lg text-center"
                  >
                    Talk to our team
                  </a>
                </div>

                {/* FAQ */}
                <section className="mt-10">
                  <h3 className="text-xl font-semibold mb-3">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <strong>Q: How much capital do I need?</strong>
                      <p className="text-gray-700">A: For a pickup-point model ~₹75k–₹2.25L. Larger aggregator/hub models require more capital.</p>
                    </div>
                    <div>
                      <strong>Q: Do I need prior logistics experience?</strong>
                      <p className="text-gray-700">A: No — franchisors usually provide SOPs and training. Basic business sense helps.</p>
                    </div>
                    <div>
                      <strong>Q: How soon can I be profitable?</strong>
                      <p className="text-gray-700">A: With good location & local marketing, many franchises break even in 3–6 months.</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gray-50 rounded-2xl shadow-sm p-5">
              <h4 className="text-lg font-semibold mb-3">Start-up Cost Snapshot</h4>
              <ul className="text-gray-700 space-y-2">
                <li>Franchise fee: ₹10k–₹50k</li>
                <li>Initial set-up: ₹35k–₹95k</li>
                <li>Working capital: ₹30k–₹80k</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow p-5">
              <h4 className="text-lg font-semibold mb-3">Why Mini Bharat?</h4>
              <p className="text-gray-700 mb-3">
                Local support, tested SOPs, access to technology, and brand trust — helpful for first-time franchisees.
              </p>
              <a href="/get-a-quote" className="inline-block bg-primary text-white px-4 py-2 rounded">Enquire Now</a>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow-sm p-5">
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <p className="text-gray-700">Call: <a href="tel:+919943342999" className="text-primary">+91 99433 42999</a></p>
              <p className="text-gray-700">Email: <a href="mailto:info@minibharatlogistics.com" className="text-primary">info@minibharatlogistics.com</a></p>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogHowTo;
