import abc from "../../assets/products/abc-powder.jpeg";
import { FaWhatsapp } from "react-icons/fa";

function ABCPowder() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={abc}
          alt="ABC Juice Powder"
          className="w-full rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">
            ABC Juice Powder
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Premium ABC Juice Powder prepared using high-quality ingredients.
            Suitable for beverage manufacturers, health food brands and export markets.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Product Features
          </h2>

          <ul className="space-y-3">
            <li>✓ Premium Quality</li>
            <li>✓ Easy Solubility</li>
            <li>✓ Export Grade</li>
            <li>✓ Hygienically Packed</li>
            <li>✓ Private Label Available</li>
            <li>✓ Bulk Supply Available</li>
          </ul>

          <a
            href="https://wa.me/918008529646"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            <FaWhatsapp />
            Inquiry Now
          </a>
        </div>

      </div>
    </div>
  );
}

export default ABCPowder;