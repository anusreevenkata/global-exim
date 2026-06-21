import chilli from "../../assets/products/chilli.jpg";
import { FaWhatsapp } from "react-icons/fa";

function RedChilli() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={chilli}
          alt="Red Chilli Powder"
          className="w-full rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Red Chilli Powder
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Premium export-quality Red Chilli Powder sourced from
            carefully selected chillies and processed under hygienic
            conditions to preserve color, aroma and taste.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Product Features
          </h2>

          <ul className="space-y-3">
            <li>✓ Rich Natural Color</li>
            <li>✓ Strong Aroma</li>
            <li>✓ Export Quality Standards</li>
            <li>✓ Hygienic Processing</li>
            <li>✓ Custom Packaging Available</li>
            <li>✓ Bulk Orders Accepted</li>
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

export default RedChilli;