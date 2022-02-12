import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFound from "../components/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto p-3">
        <NotFound />
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
