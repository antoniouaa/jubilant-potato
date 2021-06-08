export const PriceBox = ({price, dailyPrice}) => {
    return (
        <div className="box price">
            <p>Monthly subscription</p>
            <span><h1>${price}</h1>per month</span>
            <p>Full access for less than ${dailyPrice} a day</p>
            <button className="signup-button">Sign Up</button>
        </div>
    )
}

export default PriceBox;