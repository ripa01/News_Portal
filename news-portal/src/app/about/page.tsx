import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-6 text-gray-900">
      <div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About News Portal
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to <span className="font-semibold">News Portal</span> – your
          go-to platform for the latest and most reliable news from around the
          world. Our mission is to deliver accurate, unbiased, and up-to-date
          news covering various categories such as politics, technology,
          business, sports, entertainment, and more.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700">
          We aim to be a trusted source of information, empowering our readers
          with insightful and factual news. Our dedicated team of journalists
          and content creators work tirelessly to ensure you stay informed.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>✅ Real-time updates on global and local events</li>
          <li>✅ Reliable and unbiased news coverage</li>
          <li>✅ Well-researched articles and reports</li>
          <li>✅ User-friendly and engaging platform</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700">
          Have questions or feedback? We’d love to hear from you.{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact us here
          </Link>{" "}
          for inquiries and support.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
