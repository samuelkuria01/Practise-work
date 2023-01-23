import React from "react";
import { useNavigate } from "react-router-dom";


function Home (){
    const navigate = useNavigate()
    return(
        <div>
            <strong>Home Page</strong>
            <p>Hey, so its been a really long day and this right here is my fisrt entry,thanks so much guys.</p>
            <button onClick={() => navigate('/OrderSum')}>Place Order</button>
        </div>
    )
}

export default Home;