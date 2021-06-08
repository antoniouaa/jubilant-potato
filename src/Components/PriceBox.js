export const PriceBox = ({ price, dailyPrice }) => {
  return (
    <div className="box price">
      <h3>Monthly subscription</h3>
      <span className="price">${price}</span>
      <span className="price-shadow"> per</span>
      <span className="price-shadow"> month</span>
      <p className="text-opaque">
        Full access for less than ${dailyPrice} a day
      </p>
      <button className="signup-button">Sign Up</button>
    </div>
  );
};

export default PriceBox;
