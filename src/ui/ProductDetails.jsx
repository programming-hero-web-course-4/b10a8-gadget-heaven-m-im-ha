import { useContext } from "react"
import { ProductContext } from "../context/ProductsProvider"

function ProductDetails() {
    const {productDetails} = useContext(ProductContext);
    return (
        <div>
            <div>
                <img className="w-80" src={productDetails.product_image} alt="" />
            </div>
        </div>
    )
}

export default ProductDetails
