import Breadcrumb from "../components/Breadcrumb/Index";
import ProductDetails from "../parts/Details/ProductDetails";
import Suggestion from "../parts/Details/Suggestion";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

import useAsync from "../helpers/hooks/useAsync";
import { useEffect } from "react";
import fetch from "../helpers/fetch";
import { useParams } from "react-router-dom";


export default function Details() {

  const {idp} = useParams()
  
  const { data, run, isLoading } = useAsync();

  useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);

  console.log(data)

  return (
    <>
      <Header />
      <Breadcrumb list={[
        {url : "/", name: "Home"},
        {url : "/categories/91231", name: "Office Room"},
        {url : "/categories/91231/products/7888", name: "Details"}
      ]} />

      {isLoading ? "Loading" :
        <ProductDetails data={data} />
      }
      {isLoading ? "Loading" :
        <Suggestion data={data?.relatedProducts || {}}/>
      }
      
      <Sitemap />
      <Footer/>
    </>
  );
}
