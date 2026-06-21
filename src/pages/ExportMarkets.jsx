function ExportMarkets() {
  const countries = [
    "🇺🇸 United States",
    "🇬🇧 United Kingdom",
    "🇩🇪 Germany",
    "🇦🇪 UAE",
    "🇨🇦 Canada",
    "🇦🇺 Australia",
    "🇸🇬 Singapore",
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Export Markets
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Global Exim supplies premium spices, herbal products, and juice powders
        to customers across international markets.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {countries.map((country) => (
          <div
            key={country}
            className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">
              {country}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExportMarkets;