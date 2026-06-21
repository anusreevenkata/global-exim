import moringa from "../../assets/products/moringa.jpg";
import { FaWhatsapp } from "react-icons/fa";

function Moringa() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={moringa}
          alt="Moringa Powder"
          className="w-full rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">
            Moringa Powder
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Premium quality moringa leaf powder manufactured from carefully
            selected leaves and processed under hygienic conditions.
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Product Features
          </h2>

          <ul className="space-y-3">
            <li>✓ 100% Natural</li>
            <li>✓ Rich Green Color</li>
            <li>✓ Export Quality</li>
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

export default Moringa;