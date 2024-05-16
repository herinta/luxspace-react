import Breadcrumb from "../components/Breadcrumb/Index";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function Details() {
  return (
    <>
      <Header />
      <Breadcrumb list={[
        {url : "/", name: "Home"},
        {url : "/categories/91231", name: "Office Room"},
        {url : "/categories/91231/products/7888", name: "Details"}
      ]} />
      <ProductDetails/>
      <Suggestion/>
      <Sitemap />
      <Footer/>
    </>
  );
}
