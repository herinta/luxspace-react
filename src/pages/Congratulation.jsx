import Breadcrumb from "../components/Breadcrumb/Index";
import Header from "../parts/Header";

import success from "../assets/images/content/illustration-success.png"
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function Congratulation() {
  return (
    <>
      <Header />
      <Breadcrumb list={[
        {url : "/", name: "Home"},
        {url : "/congratulation", name: "Succes Checkout"},
      ]} />
      <section className="">
        <div className="container mx-auto min-h-screen">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center">
              <img
                src={success}
                alt="congrats illustration"
              />
              <h2 className="text-3xl font-semibold mb-6">
                Ah yes its success!
              </h2>
              <p className="text-lg mb-12">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <a
                href="details.html"
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
              >
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </section>
      <Sitemap/>
      <Footer/>
    </>
  );
}
