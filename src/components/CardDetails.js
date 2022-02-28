import React from 'react'

const CardDetails = () => {
    return (
        <div>
            <h1>Card Details</h1>
            <form>
                <p>Card Type</p>
                <input type="radio" value="child" />
                <label for="child">Visa</label><br></br>
                <input type="radio" value="child" />
                <label for="child">Rupay</label><br></br>
                <input type="radio" value="child" />
                <label for="child">Mastercard</label><br></br>
            </form>

            <label>Card number
                <input type="integer" placeholder="" required/><br></br><br></br>
            </label>

            <label>Security code
                <input type="text" placeholder="" required/>
            </label><br></br><br></br>

            <label>Name on card
                <input type="text" placeholder="" required/>
            </label><br></br><br></br>

            <button>Previous</button>
            <button>Next</button>
        </div>
    )
}

export default CardDetails