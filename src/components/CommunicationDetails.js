import React from 'react'

const CommunicationDetails = () => {
    return (
        <div>
            <h1>Communication Details</h1>
            <label>Address
                <textarea></textarea>
            </label><br></br><br></br>

            <label>Post code
                <input type="text" placeholder="post code" required/><br></br><br></br>
            </label>

            <label>Country
                <input type="text" placeholder="country" required/>
            </label><br></br><br></br>

            <button>Previous</button>
            <button>Next</button>
        </div>
    )
}

export default CommunicationDetails