import React from "react";
import './NewLetter.css'

const NewLetter= () =>{
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers  on Your Email</h1>
            <p>Subscribe to our newletter and  stay  updated</p>
            <div>
                <input type="email" placeholder="enter your email id" />
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default NewLetter