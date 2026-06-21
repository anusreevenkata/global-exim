function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold">
              Global Exim
            </h2>

            <p className="mt-3 text-gray-400">
              Premium Indian Spices, Herbal Products &
              Juice Powders Exporter.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Contact
            </h3>

            <p className="text-gray-400">
              Hyderabad, Telangana, India
            </p>

            <p className="text-gray-400">
              +91 8008529646
            </p>

            <p className="text-gray-400">
              nattechand111@gmail.com
            </p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 Global Exim. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;