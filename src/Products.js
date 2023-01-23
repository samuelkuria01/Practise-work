import { Link } from "react-router-dom";

function Products (){
    return(
        <div>
            <input type="text" placeholder="search"></input>
            <nav  className="grid gap-0 column-gap-3">
               <div className="container-fluid">
               <Link  className="p-2 g-col-6" to="featured" >Featured products</Link>
                <Link  className="p-2 g-col-6" to="new" >New products</Link>
               </div>
            </nav>
        </div>
    )
}
export default Products;