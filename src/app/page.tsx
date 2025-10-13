export default function Home() {
  return (
    <>
      <section className="bg-[coral] text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to My Book Store Website
          </h2>
          <p className="text-lg mb-6">
            A short description about your website goes here.
          </p>
          <a
            href="#"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Feature One</h3>
            <p className="text-gray-600">
              Short description of the first feature.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Feature Two</h3>
            <p className="text-gray-600">
              Short description of the second feature.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Feature Three</h3>
            <p className="text-gray-600">
              Short description of the third feature.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
