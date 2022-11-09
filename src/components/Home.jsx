import React, { useState } from "react";
import { Chart } from "primereact/chart";
import BarChart from "./BarChart";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Home() {
  return (
    <div style={{paddingBottom:"100px"}}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 mt-5">
            <BarChart />
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
      <Cards />
    
    </div>
  );
}

export default Home;
