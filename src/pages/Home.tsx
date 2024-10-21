import React from "react";
import Layout from "../components/navigation/Layout";
import Hero from "components/home/Hero";
import Services from "components/home/Services";
import Benefits from "components/home/Benefits";

const Home = () => {
  return (
    <Layout>
      {/* hero */}
      <Hero />
      {/* services */}
      <Services />
      {/* benefits */}
      <Benefits />
    </Layout>
  );
};

export default Home;
