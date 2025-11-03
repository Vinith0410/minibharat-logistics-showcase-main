
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog3: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <Header />

      {/* Page Banner */}
      <section
        className="relative bg-cover bg-center py-20 text-center text-white"
        style={{
          backgroundImage:
            "url('https://minibharatlogistics.com/assets/front/img/breadcrumb_image_.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
       <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">
            Blog: Unlocking Prosperity
          </h1>
          <p className="text-gray-200">
            Mini Bharat's Journey through Delivery Point Investment and Profit

          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
            <img
              src="https://minibharatlogistics.com/assets/front/img/blog/17032433892024505022.png"
              alt="Blog"
              className="w-full rounded-lg mb-6"
            />
            <h3 className="text-3xl font-semibold mb-4">
              Unlocking Prosperity: Mini Bharat's Journey through Delivery Point
              Investment and Profit
            </h3>
            <div className="flex items-center text-gray-500 space-x-4 mb-6">
              <span>
                <i className="fal fa-user mr-1"></i> By Admin
              </span>
              <span>
                <i className="fal fa-calendar-alt mr-1"></i> 22 Dec, 2023
              </span>
            </div>

            <div className="space-y-4 leading-relaxed text-gray-700">
              <p>
                In the vibrant tapestry of India, the emergence of Mini Bharat—a term
                encapsulating the growth of smaller towns and cities—is reshaping the
                economic landscape. Central to this transformation is the concept of
                delivery point investment, a strategic move that not only fuels
                economic development but also yields substantial profits.
              </p>

              <p>
                Delivery points are pivotal hubs that connect businesses with their
                customers. Investment in these points is an investment in accessibility,
                efficiency, and market penetration.
              </p>

              <p>
                The first key aspect of delivery point investment in Mini Bharat is
                the expansion of infrastructure. Investments in transportation networks,
                warehousing facilities, and last-mile connectivity enhance the
                efficiency of product distribution.
              </p>

              <p>
                Moreover, delivery point investment fosters job creation. As logistics
                and distribution networks grow, so do employment opportunities. The
                influx of jobs stimulates local economies and boosts purchasing power.
              </p>

              <p>
                The ripple effect of delivery point investment is felt in the local
                business ecosystem. SMEs in Mini Bharat benefit from enhanced access
                to markets and improved logistics, which promotes steady economic growth.
              </p>

              <p>
                In Mini Bharat, the synergy between delivery point investment and
                profitability is striking. The increased accessibility and efficiency
                translate into higher sales and revenue for businesses.
              </p>
            </div>

            {/* Profitability Table */}
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left py-2 px-3 border-b font-semibold">
                      DESCRIPTIONS
                    </th>
                    <th className="text-left py-2 px-3 border-b font-semibold">
                      AMOUNT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 border-b">Required Man Power</td>
                    <td className="py-2 px-3 border-b">5</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Salary Per Delivery Boy</td>
                    <td className="py-2 px-3 border-b">₹15,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Total Salary</td>
                    <td className="py-2 px-3 border-b">₹75,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">No. of Parcel Executives</td>
                    <td className="py-2 px-3 border-b">60</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Total Parcels Per Day</td>
                    <td className="py-2 px-3 border-b">300</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Per Parcel Cost</td>
                    <td className="py-2 px-3 border-b">₹18 – ₹22</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Revenue @ ₹18/Parcel</td>
                    <td className="py-2 px-3 border-b">₹5,400</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">30 Days Revenue</td>
                    <td className="py-2 px-3 border-b">₹1,62,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Fuel</td>
                    <td className="py-2 px-3 border-b">₹15,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 border-b">Incentives</td>
                    <td className="py-2 px-3 border-b">₹5,000</td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="py-2 px-3 border-b">Total Expenses</td>
                    <td className="py-2 px-3 border-b">₹95,000</td>
                  </tr>
                  <tr className="font-semibold text-green-600 bg-gray-100">
                    <td className="py-2 px-3">Net Profit</td>
                    <td className="py-2 px-3">₹67,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="bg-gray-50 rounded-2xl shadow-sm p-6 h-fit">
            {/* Search Widget */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-3">Search Blog</h4>
              <form action="/blog" method="GET" className="flex">
                <input
                  type="text"
                  name="term"
                  placeholder="Search..."
                  className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-lg"
                >
                  <i className="fal fa-search"></i>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-semibold mb-3">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/blog?category=Business"
                    className="flex justify-between text-gray-700 hover:text-primary"
                  >
                    <span>Business</span>
                    <span>(3)</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blog3;
