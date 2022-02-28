import React from 'react'
import { useHistory } from 'react-router-dom'

const PersonalDetails = () => {
    const history = useHistory()
    const HandleNext = () => {
        history.push({

            pathname: '/cd'

        })
    }
    return (
        <div>
            <h1>Personal Details</h1>
            <label>Name
                <input type="text" placeholder="First & Last Name" required />
            </label><br></br><br></br>

            <label>Email
                <input type="text" placeholder="email address" required /><br></br><br></br>
            </label>

            <label>Phone
                <input type="text" placeholder="phone number" required />
            </label><br></br><br></br>

            <button onClick={HandleNext}>Next</button>

        </div>
    )
}

export default PersonalDetails