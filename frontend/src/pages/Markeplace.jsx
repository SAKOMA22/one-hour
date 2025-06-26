import AllProducts from "../components/products/AllProducts";

const Marketplace = () => {
  return (
    <section className="container mx-auto py-16 lg:py-24 px-4">
      <h1 className="text-3xl lg:text-5xl mb-8 text-green-800">
        Get your products at cheaper Prices
      </h1>
      <AllProducts />
    </section>
  );
};

export default Marketplace;
