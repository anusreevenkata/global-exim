import { motion } from "framer-motion";
import {
FaWhatsapp,
FaLeaf,
FaGlobeAsia,
FaShippingFast,
FaHandshake,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
return ( <div>
{/* Hero */}
<section
className="min-h-screen bg-cover bg-center flex items-center"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')",
}}
> <div className="bg-black/60 w-full min-h-screen flex items-center">
<motion.div
className="max-w-7xl mx-auto px-6 text-white"
initial={{ opacity: 0, y: 60 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
> <h1 className="text-5xl md:text-7xl font-bold mb-6">
Premium Indian Spices <br />
Herbal Products & <br />
Juice Powders Exporter </h1>

        <p className="text-xl max-w-3xl mb-8">
          Global Exim is a trusted exporter from Hyderabad, India,
          supplying premium quality spices, herbal products and
          juice powders to international markets.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            to="/products"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold"
          >
            Explore Products
          </Link>

          <Link
            to="/contact"
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  </section>

  {/* About */}
  <section className="py-24 px-6 bg-white">
    <motion.div
      className="max-w-6xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2 className="text-5xl font-bold mb-8">
        About Global Exim
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Global Exim specializes in exporting premium Indian spices,
        herbal products and juice powders. Our commitment to quality,
        packaging standards and customer satisfaction helps us serve
        buyers across international markets.
      </p>
    </motion.div>
  </section>

  {/* Statistics */}
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white p-8 rounded-xl shadow text-center"
        >
          <h3 className="text-5xl font-bold text-blue-600">
            50+
          </h3>
          <p className="mt-3">Products</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white p-8 rounded-xl shadow text-center"
        >
          <h3 className="text-5xl font-bold text-green-600">
            10+
          </h3>
          <p className="mt-3">Export Markets</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white p-8 rounded-xl shadow text-center"
        >
          <h3 className="text-5xl font-bold text-orange-500">
            100+
          </h3>
          <p className="mt-3">Satisfied Buyers</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white p-8 rounded-xl shadow text-center"
        >
          <h3 className="text-5xl font-bold text-purple-600">
            24/7
          </h3>
          <p className="mt-3">Support</p>
        </motion.div>

      </div>
    </div>
  </section>

  {/* Why Choose Us */}
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-5xl font-bold text-center mb-16">
        Why Choose Global Exim
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        <motion.div
          whileHover={{ y: -10 }}
          className="text-center p-8 shadow rounded-xl"
        >
          <FaLeaf className="text-5xl mx-auto mb-4 text-green-600" />
          <h3 className="font-bold text-xl mb-2">
            Natural Products
          </h3>
          <p>
            Premium quality natural ingredients.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="text-center p-8 shadow rounded-xl"
        >
          <FaGlobeAsia className="text-5xl mx-auto mb-4 text-blue-600" />
          <h3 className="font-bold text-xl mb-2">
            Global Reach
          </h3>
          <p>
            Serving international buyers worldwide.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="text-center p-8 shadow rounded-xl"
        >
          <FaShippingFast className="text-5xl mx-auto mb-4 text-orange-500" />
          <h3 className="font-bold text-xl mb-2">
            Fast Logistics
          </h3>
          <p>
            Reliable shipping and export support.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -10 }}
          className="text-center p-8 shadow rounded-xl"
        >
          <FaHandshake className="text-5xl mx-auto mb-4 text-purple-600" />
          <h3 className="font-bold text-xl mb-2">
            Trusted Partner
          </h3>
          <p>
            Long-term business relationships.
          </p>
        </motion.div>

      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-24 bg-gray-100 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">
        What Our Buyers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
          <p>
            Excellent quality products and professional service.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
          <p>
            Reliable export partner with timely delivery.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
          <p>
            Great packaging and excellent communication.
          </p>
        </div>

      </div>
    </div>
  </section>

  {/* Packaging */}
  <section className="py-24 px-6 bg-white">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-5xl font-bold text-center mb-16">
        Packaging Options
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold">10 KG</h3>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold">50 KG</h3>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold">100 KG</h3>
        </div>

        <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
          <h3 className="text-3xl font-bold">250 KG</h3>
        </div>

      </div>

      <div className="text-center mt-10">
        <p>✓ Custom Packaging Available</p>
        <p>✓ Private Label Available</p>
        <p>✓ Bulk Orders Accepted</p>
      </div>

    </div>
  </section>

  {/* Contact CTA */}
  <section className="bg-blue-700 text-white py-24">
    <div className="max-w-5xl mx-auto text-center px-6">
      <h2 className="text-5xl font-bold mb-6">
        Ready to Import Premium Products from India?
      </h2>

      <p className="text-xl mb-8">
        Contact Global Exim today for inquiries and partnerships.
      </p>

      <Link
        to="/contact"
        className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold"
      >
        Get In Touch
      </Link>
    </div>
  </section>

  {/* WhatsApp */}
  <a
    href="https://wa.me/918008529646"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg text-3xl"
  >
    <FaWhatsapp />
  </a>
</div>

);
}

export default Home;
