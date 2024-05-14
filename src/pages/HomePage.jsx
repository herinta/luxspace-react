import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Clients from "../parts/HomePage/Clients";
import Footer from "../parts/HomePage/Footer";
import JustArrived from "../parts/HomePage/JustArrived";
import Sitemap from "../parts/HomePage/Sitemap";

export default function HomePage() {
  return (
    <>
      <Header theme="white" position="absolute"/>
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
