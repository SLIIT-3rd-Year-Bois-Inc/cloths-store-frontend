import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HomePopular from "../../components/customer/home-popular";
import TopSection from "../../components/customer/top-section";

export default function Home() {
  return (
    <>
      <Header homeStyle />
      <TopSection />
      <HomePopular />
      <Footer />
    </>
  );
}
