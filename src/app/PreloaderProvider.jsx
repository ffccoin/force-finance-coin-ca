"use client";

import Footer from "@/components/footer/Footer";
import Header from "@/components/headers/Header";
import { useEffect, useState } from "react";
import LoadingPage from "./loading/page";

const PreloaderProvider = ({ children, data }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Header coins={data} />
          {children}
          <Footer />
        </>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default PreloaderProvider;
