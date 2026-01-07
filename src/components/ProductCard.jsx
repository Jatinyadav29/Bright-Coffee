import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="sm:my-4 cursor-pointer">
      <div className="w-full h-[60vh]">
        <img
          className="object-cover w-full h-full"
          src="../Images/coffee1.jpg"
          alt=""
        />
      </div>
      <div className="h-10 bg-[#decca8] text-black hover:text-[#decca8] hover:bg-black transition-colors duration-500 ease-in-out flex justify-center items-center">
        Buy Now
      </div>
      <div className="mt-4">
        <div className="my-1">
          <h1 className="sm:text-[2rem] text-[1rem] font-bold whitespace-nowrap">
            ESPRESSO PACK
          </h1>
        </div>
        <p>Tobacco, cocoa, pepper, citrus, cane sugar</p>
        <div className="relative inline-block mt-5">
          <p className="text-white whitespace-nowrap">Starting from ₹1800</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
