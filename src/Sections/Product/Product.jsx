import ProductCard from "../../components/ProductCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button2 from "../../components/Button2";

const Product = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ProductRef = useRef(null);
  //   const headingRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ProductRef.current,
        start: "top bottom",
      },
    });

    tl.from(".childText2", {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "expoScale(0.5,7, none)",
    });
    tl.from(".productCard", {
      y: "20%",
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "expoScale(0.5,7, none)",
    });
  });
  return (
    <>
      <div ref={ProductRef} className=" bg-[#272626] text-[#decca8] py-6">
        <div className="flex flex-col justify-center items-center overflow-hidden mb-7">
          <div className="childText1 font-serif sm:text-[2rem] text-[1.5rem] text-center sm:my-6 my-3">
            We are multiple Ranges
          </div>
          <div>
            <div className="font-sans font-black lg:text-[6rem] sm:text-[5rem] text-[3rem] text-center mb-5 uppercase">
              <div className="lg:leading-20 sm:leading-16 leading-10 overflow-hidden">
                <div className="childText2">Carefully</div>
              </div>

              <div className="lg:leading-20 sm:leading-16 leading-10 overflow-hidden">
                <div className="childText2">Selected</div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="productCards"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:gap-8 gap-4 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex justify-center my-16">
          <Button2 message={"Shop"} />
        </div>
      </div>
    </>
  );
};

export default Product;
