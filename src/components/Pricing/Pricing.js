import React, { useState } from "react";

const Pricing = () => {
  return (
    <>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required</p>
      </header>
      <main>
        <PricingCalc />
      </main>
    </>
  );
};

const PricingCalc = (props) => {
  // props();

  const [amount, setAmount] = useState(16);

  // let amount = 16;

  const handleRangeChange = (e) => {
    const inpValue = e.target.value;

    if (inpValue === "0") {
      setAmount(8);
    } else if (inpValue === "5") {
      setAmount(12);
    } else if (inpValue === "10") {
      setAmount(16);
    } else if (inpValue === "15") {
      setAmount(24);
    } else if (inpValue === "20") {
      setAmount(36);
    }

    console.log(amount);

    // console.log(e.target.value);
  };

  return (
    <div>
      <div className="pageViewsContainer">
        <p>K PAGEVIEWS</p>
      </div>
      <div className="rangeContainer">
        <input type="range" step="5" defaultValue="10" min="0" max="20" onChange={handleRangeChange} />
      </div>
      <div className="billContainer">
        <p>{amount}</p>
      </div>
      <div className="periodToPay"></div>
    </div>
  );
};

export default Pricing;
