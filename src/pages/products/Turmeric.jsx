import turmeric from "../../assets/products/turmeric.jpg";
import { FaWhatsapp } from "react-icons/fa";

function Turmeric() {
return ( <div className="max-w-7xl mx-auto py-20 px-6"> <div className="grid md:grid-cols-2 gap-10">

    <img
      src={turmeric}
      alt="Turmeric Powder"
      className="w-full rounded-2xl shadow-lg"
    />

    <div>
      <h1 className="text-5xl font-bold mb-6">
        Turmeric Powder
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Premium quality turmeric powder processed from carefully
        selected turmeric roots. Rich in color, aroma and purity,
        suitable for export markets.
      </p>

      <h2 className="text-2xl font-bold mb-4">
        Product Features
      </h2>

      <ul className="space-y-3">
        <li>✓ Natural Yellow Color</li>
        <li>✓ High Curcumin Content</li>
        <li>✓ Export Quality</li>
        <li>✓ Hygienically Processed</li>
        <li>✓ Custom Packaging</li>
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

export default Turmeric;
