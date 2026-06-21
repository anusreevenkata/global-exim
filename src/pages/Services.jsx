function Services() {
  const services = [
    "Export Management",
    "Product Sourcing",
    "Quality Inspection",
    "Logistics & Shipping",
    "Documentation Support",
    "Trade Consulting",
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl font-semibold">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;