import Button from "../../components/Button";
import ProductCard from "../../components/ProductCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Product = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#productText", {});
  });
  return (
    <>
      <div className="mt-20 pt-5 bg-gray-950 text-white">
        <div
          id="productText"
          className="flex flex-col justify-center items-center"
        >
          <div className="font-serif sm:text-[2rem] text-[1.5rem] text-center sm:my-6 my-3">
            We are multiple Ranges
          </div>
          <div>
            <div className="font-sans font-black lg:text-[6rem] sm:text-[5rem] text-[3rem] text-center mb-5 uppercase">
              <div className="lg:leading-20 sm:leading-16 leading-10">
                Carefully
              </div>
              <div className="lg:leading-20 sm:leading-16 leading-10">
                Selected
              </div>
            </div>
          </div>
        </div>
        <div
          id="productCards"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center my-16">
          <Button message={"Shop"} />
        </div>
      </div>
    </>
  );
};

export default Product;
