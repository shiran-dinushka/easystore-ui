import PageHeading from "./PageHeading";
import  products  from "../data/products";
import ProductListing from "./ProductListing";

export default function Home() {
  return (
    <div className="home-container">
      <PageHeading  title="Explore Eazy Stickers!">
        <p className="page-heading-paragraph">
          Add a touch of creativity to your space with our wide range of fun and
          unique stickers. Perfect for any occasion!
        </p>
      </PageHeading>
      <ProductListing products={products} />
    </div>
  );
}
