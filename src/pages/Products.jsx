import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import chilli from "../assets/products/chilli.jpg";
import turmeric from "../assets/products/turmeric.jpg";
import ginger from "../assets/products/ginger.jpg";
import moringa from "../assets/products/moringa.jpg";
import abc from "../assets/products/abc-powder.jpeg";

const products = [
  {
    name: "Red Chilli Powder",
    category: "Spices",
    image: chilli,
    link: "/products/red-chilli-powder",
  },
  {
    name: "Turmeric Powder",
    category: "Spices",
    image: turmeric,
    link: "/products/turmeric-powder",
  },
  {
  name: "Ginger Powder",
  category: "Spices",
  image: ginger,
  link: "/products/ginger-powder",
},
{
  name: "Moringa Powder",
  category: "Herbal Products",
  image: moringa,
  link: "/products/moringa-powder",
},
{
  name: "ABC Juice Powder",
  category: "Juice Powders",
  image: abc,
  link: "/products/abc-juice-powder",
},
];

function Products() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">
          Our Products
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Premium export-quality spices, herbal products and juice powders.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              {product.link !== "#" ? (
                <Link to={product.link}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover"
                  />
                </Link>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
              )}

              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">
                  {product.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  Premium export-quality product available with customized
                  packaging and international shipping support.
                </p>

                <div className="flex gap-3 mt-5">

                  {product.link !== "#" && (
                    <Link
                      to={product.link}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg"
                    >
                      View Details
                    </Link>
                  )}

                  <a
                    href={`https://wa.me/918008529646?text=Hello%20Global%20Exim,%20I%20am%20interested%20in%20${product.name}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg"
                  >
                    <FaWhatsapp />
                    Inquiry
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;