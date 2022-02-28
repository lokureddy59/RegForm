import React from 'react'
import { useHistory } from 'react-router-dom'

const CommunicationDetails = () => {
    const history = useHistory()
    const HandleNext = () => {
        history.push({
            pathname:'/cad'
        })
    }
    const HandlePrevious = () =>{
        history.push({
            pathname:'/'
        })
    }
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

            <button onClick={HandlePrevious}>Previous</button>
            <button onClick={HandleNext}>Next</button>
        </div>
    )
}

export default CommunicationDetails
