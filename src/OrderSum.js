import { useNavigate } from "react-router-dom";

function OrderSum (){
    const navigate = useNavigate()
    return(
        <div>
            <p>Order confirmed!</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    )
}
export default OrderSum;