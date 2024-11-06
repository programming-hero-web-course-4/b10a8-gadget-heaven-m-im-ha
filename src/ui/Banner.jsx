import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col justify-center">
        <h2 className="mx-auto mt-6 max-w-5xl text-center text-5xl font-bold leading-snug text-white">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/90">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex justify-center items-center mt-6 mb-48">
          <button
            className="text-Purple rounded-3xl bg-white px-4 py-2 font-bold"
            onClick={() => navigate("/dashboard")}
          >
            Shop Now
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
