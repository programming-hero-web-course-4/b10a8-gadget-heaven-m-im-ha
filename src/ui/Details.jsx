import ProductDetails from "./ProductDetails"

function Details() {
    return (
        <div className="mt-10">
            <div  className="bg-Purple rounded-2xl">
                <h3 className="text-2xl text-center pt-6 text-white font-semibold">Product Details</h3>
                <p className="mt-2 max-w-3xl text-white text-center mx-auto pb-48">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <ProductDetails/>
        </div>
    )
}

export default Details
