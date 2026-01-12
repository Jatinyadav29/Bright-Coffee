const ProductCard = ({ image, imageHover, title, description, price }) => {
  return (
    <div className="productCard relative group sm:my-4 cursor-pointer">
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          className="absolute inset-0 object-cover w-full h-full transition-opacity duration-700 ease-linear group-hover:opacity-0"
          src={image}
          alt=""
        />
        <img
          className="absolute inset-0 object-cover opacity-0 w-full h-full transition-opacity duration-700 ease-linear group-hover:opacity-100"
          src={imageHover}
          alt=""
        />
      </div>
      <div className="h-10 bg-[#decca8] text-black hover:bg-white active:bg-white font1 font-semibold transition-colors duration-500 ease-in-out flex justify-center items-center">
        Buy Now
      </div>
      <div className="mt-4">
        <div className="my-1">
          <h1 className="text-[2rem] font-bold whitespace-nowrap">{title}</h1>
        </div>
        <p>{description}</p>
        <div className="relative inline-block mt-2 mb-2">
          <p className="text-white text-[1.5rem] whitespace-nowrap font-semibold">
            Starting from ₹{price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
