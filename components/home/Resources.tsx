"use client";

import Image from "next/image";

export default function Resources() {
  return (
    <section className="px-6 py-20 md:px-16 lg:px-32 bg-white">
      <h2 className="text-3xl font-bold text-[#2D2A8D] text-center mb-4">
        Resources & Insights
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Learn more about our technology, process, and materials from our
        engineering team.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Mixing Efficiency 101",
            img: "/images/articles/mixing.svg",
          },
          {
            title: "Choosing the Right Machine",
            img: "/images/articles/selection.svg",
          },
          {
            title: "Maintenance Best Practices",
            img: "/images/articles/maintenance.svg",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#2D2A8D] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Read our
                insights on optimizing production.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
