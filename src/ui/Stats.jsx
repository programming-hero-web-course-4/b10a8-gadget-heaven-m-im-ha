import { useContext } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { ProductContext } from "../context/ProductsProvider";

function Stats() {
  const { addToCart } = useContext(ProductContext);

  return (
    <div>
      <div>
        <h3>Statistics</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div>
        <h3 className="mb-10 text-center">Statistics</h3>

        <div>
          {addToCart.length > 0 ? (
            <ComposedChart
              width={1200}
              height={400}
              data={addToCart}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={20} fill="#413ea0" />
              {/* <Line type="monotone" dataKey="price" stroke="#ff7300" /> */}
              <Scatter dataKey="rating" fill="red" />
            </ComposedChart>
          ) : (
            <h1>First add products to the cart</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stats;
