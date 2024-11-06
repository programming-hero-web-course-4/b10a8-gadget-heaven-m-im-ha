import ProductDetails from "./ProductDetails"

function Details() {
    return (
        <div className="mt-10 mb-28">
            <div  className="bg-Purple">
                <h3 className="text-2xl text-center pt-6 text-white font-semibold">Product Details</h3>
                <p className="mt-2 max-w-3xl text-white text-center mx-auto pb-48">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="bg-gray-200 h-72"></div>
            <ProductDetails/>
        </div>
    )
}

export default Details
