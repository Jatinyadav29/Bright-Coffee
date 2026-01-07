const ProductCard = () => {
  return (
    <div className="productCard relative group sm:my-4 cursor-pointer">
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ease-linear group-hover:opacity-0"
          src="../Images/coffee1.jpg"
          alt=""
        />
        <img
          className="absolute inset-0 object-cover opacity-0 w-full h-full transition-opacity duration-700 ease-linear group-hover:opacity-100"
          src="../Images/img2.jpg"
          alt=""
        />
      </div>
      <div className="h-10 bg-[#decca8] text-black hover:text-[#decca8] hover:bg-black active:text-[#decca8] active:bg-black font1 font-semibold transition-colors duration-500 ease-in-out flex justify-center items-center">
        Buy Now
      </div>
      <div className="mt-4">
        <div className="my-1">
          <h1 className="sm:text-[2rem] text-[1rem] font-bold whitespace-nowrap">
            ESPRESSO PACK
          </h1>
        </div>
        <p>Tobacco, cocoa, pepper, citrus, cane sugar</p>
        <div className="relative inline-block mt-2 mb-2">
          <p className="text-white text-[1.5rem] whitespace-nowrap font-semibold">
            Starting from ₹1800
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
