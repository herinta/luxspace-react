import Header from "../parts/Header";
import Hero from "../parts/Hero";
import BrowseRoom from "../parts/HomePage/BrowseRoom";
import Clients from "../parts/HomePage/Clients";
import JustArrived from "../parts/HomePage/JustArrived";

export default function HomePage() {
  return (
    <>
        <Header/>
        <Hero/>
        <BrowseRoom/>
        <JustArrived/>
        <Clients/>
    </>
  )
}
