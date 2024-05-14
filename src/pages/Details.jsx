import Breadcrumb from "../components/Breadcrumb/Index";
import Header from "../parts/Header";
import Footer from "../parts/HomePage/Footer";
import Sitemap from "../parts/HomePage/Sitemap";

export default function Details() {
  return (
    <>
      <Header />
      <Breadcrumb list={[
        {url : "/", name: "Home"},
        {url : "/categories/91231", name: "Office Room"},
        {url : "/categories/91231/products/7888", name: "Details"}
      ]} />
      <Sitemap />
      <Footer />
    </>
  );
}
