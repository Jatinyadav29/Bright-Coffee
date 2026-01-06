import Button from "./Button";

const ProductCard = () => {
  return (
    <div className="sm:my-4">
      <div className="w-full h-[60vh]">
        <img
          className="object-cover w-full h-full"
          src="../Images/coffee1.jpg"
          alt=""
        />
      </div>
      <div className="mt-4">
        <div className="my-1">
          <h1 className="sm:text-[2rem] text-[1rem] font-bold whitespace-nowrap">
            ESPRESSO PACK
          </h1>
        </div>
        <p>Tobacco, cocoa, pepper, citrus, cane sugar</p>
        <div className="flex justify-between gap-3 text-[1.5rem] cursor-pointer mt-5">
          <p className="py-2 sm:px-12 sm:py-4 px-8 md:text-[1rem] text-[0.75rem] bg-black text-white">
            ₹1800
          </p>
          <Button message={"Buy"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
