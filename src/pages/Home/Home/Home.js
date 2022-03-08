import React from "react";
import Footer from "../../Shared/Footer/Footer";

import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <CompanyLogo />
      <Services />
      <Portfolio />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
