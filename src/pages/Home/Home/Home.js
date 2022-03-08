import React from "react";
import Footer from "../../Shared/Footer/Footer";

import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <CompanyLogo />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
