function Footer() {
    return (
        <div className="mx-36 mb-4">
            <div className="text-center mb-8 mt-16">
                <h2 className="text-3xl font-semibold">Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mx-auto ml-48">
                <div>
                    <h4>Services</h4>
                    <ul>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
