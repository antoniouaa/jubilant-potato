import "./Pricing.css";

import PriceBox from "./PriceBox";
import TextBox from "./TextBox";

export const Pricing = () => {
  const prices = {
    price: 29,
    dailyPrice: 1,
  };
  return (
    <div className="container">
      <div className="title">
        <h3>Join our community</h3>
        <h4 className="text-opaque">30-day hassle-free money back guarantee</h4>
        <p>Gain access to whatever it is we're selling right here</p>
      </div>
      <div className="bottom">
        <PriceBox {...prices} />
        <TextBox />
      </div>
    </div>
  );
};

export default Pricing;
