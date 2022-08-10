import React from 'react';

import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import Breadcrumb from '../components/Breadcrumb';
import ProductDetails from '../parts/Details/ProductDetails';
import Suggestion from '../parts/Details/Suggestion';



export default function Details(props) {
  return (
    <>
        <Header theme="black"/>
        <Breadcrumb list={[
            {url: "/", name: "Home"},
            {url: "/categories/90212", name: "Office Room"},
            {url: "/categories/90212/products/9888", name: "Details"}
        ]}/>
        <ProductDetails/>
        <Suggestion/>
        <Sitemap/>
        <Footer/>
    </>
  );
};
