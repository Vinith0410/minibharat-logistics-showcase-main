


import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendarDays, User, MessageCircle } from "lucide-react";

const Blog1: React.FC = () => {
  useEffect(() => {
    // Preloader removal
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000);
    }

    // Disqus comments
    const d = document,
      s = d.createElement("script");
    s.src = "//nextit-1.disqus.com/embed.js";
    s.setAttribute("data-timestamp", String(+new Date()));
    (d.head || d.body).appendChild(s);

    // Tawk.to Chat
    const tawkScript = d.createElement("script");
    tawkScript.async = true;
    tawkScript.src = "https://embed.tawk.to/602f3cb99c4f165d47c4d425/1eus8adqv";
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");
    d.body.appendChild(tawkScript);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-72 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://minibharatlogistics.com/assets/front/img/breadcrumb_image_.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">
            Blog: Unleashing Opportunities
          </h1>
          <p className="text-gray-200">
            Starting a Delivery Point Franchise Business with Mini Bharat
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Blog Main Content */}
          <div className="md:col-span-2">
            <div className="rounded-2xl shadow-md bg-white overflow-hidden">
              <img
                src="https://minibharatlogistics.com/assets/front/img/blog/1703243340942608774.png"
                alt="Blog"
                className="w-full h-full object-cover"
              />
              <div className="p-6 md:p-10">
                <div className="flex items-center text-gray-500 text-sm space-x-6 mb-4">
                  <span className="flex items-center gap-2">
                    <User size={16} /> Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} /> 22 Dec, 2023
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageCircle size={16} /> Comments
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900">
                  Unleashing Opportunities: Starting a Delivery Point Franchise
                  Business with Mini Bharat
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In an era dominated by e-commerce and rapid digitalization, the
                  demand for efficient and reliable delivery services has skyrocketed.
                  This surge in demand has opened up a plethora of opportunities for
                  entrepreneurs to venture into the delivery point franchise business.
                  One such platform that can assist you on this journey is Mini Bharat.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                  Understanding the Delivery Point Franchise Business
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A delivery point franchise involves partnering with a logistics
                  company to establish collection points where customers can pick up
                  and drop off their parcels. This model caters to the growing need for
                  convenient and secure parcel delivery services.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                  Key Steps to Starting a Delivery Point Franchise
                </h3>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
                  <li>
                    <strong>Research and Planning:</strong> Conduct market research to
                    identify potential locations and understand local demand.
                  </li>
                  <li>
                    <strong>Legal and Regulatory Compliance:</strong> Obtain necessary
                    licenses and permits before operations.
                  </li>
                  <li>
                    <strong>Partnership with a Logistics Provider:</strong> Choose a
                    reliable brand like Mini Bharat for better support and trust.
                  </li>
                  <li>
                    <strong>Location Selection:</strong> Pick areas with high foot
                    traffic and accessibility.
                  </li>
                  <li>
                    <strong>Marketing and Promotion:</strong> Build awareness using
                    Mini Bharat’s brand name and marketing tools.
                  </li>
                  <li>
                    <strong>Technology Integration:</strong> Use tech tools like
                    tracking systems for smooth operation.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
                  Conclusion
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Starting a delivery point franchise business holds immense potential
                  in the evolving landscape of logistics and e-commerce. With the
                  support of Mini Bharat, entrepreneurs can embark on this journey
                  confidently, leveraging cutting-edge technology and an established
                  network to achieve success.
                </p>

                {/* Social Share */}
                <div className="border-t border-gray-200 pt-6 mt-6 flex items-center justify-between">
                  <h4 className="font-medium text-gray-800">Share this article:</h4>
                  <div className="flex space-x-3 text-blue-500">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>

                {/* Disqus Comments */}
                <div className="mt-10" id="disqus_thread"></div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow p-5">
                <h4 className="font-semibold text-gray-800 mb-3">Search Blog</h4>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="bg-white rounded-2xl shadow p-5">
                <h4 className="font-semibold text-gray-800 mb-3">Categories</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Business <span className="text-sm text-gray-400">(3)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Franchise <span className="text-sm text-gray-400">(5)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+919943342789"
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg"
        >
          <i className="fas fa-phone"></i>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+919943342678"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
};

export default Blog1;
