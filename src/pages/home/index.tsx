import React from "react";
import Header from "../../components/header";
import HomePopular from "../../components/home-popular";
import TopSection from "../../components/top-section";

export default function Home() {
  return (
    <div>
      <Header />
      <TopSection />
      <HomePopular />
    </div>
  );
}
