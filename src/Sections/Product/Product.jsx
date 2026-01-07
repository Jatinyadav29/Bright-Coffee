import ProductCard from "../../components/ProductCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button2 from "../../components/Button2";

const Product = () => {
  gsap.registerPlugin(ScrollTrigger);

  const textRef = useRef(null);
  //   const headingRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      delay: 0.3,
      stagger: 0.2,
      ease: "expoScale(0.5,7, none)",
      scrollTrigger: {
        markers: true,
        trigger: textRef.current,
      },
    });
  });
  return (
    <>
      <div className=" bg-[#272626] text-[#decca8] py-6">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div
            ref={textRef}
            className="font-serif sm:text-[2rem] text-[1.5rem] text-center sm:my-6 my-3"
          >
            We are multiple Ranges
          </div>
          <div>
            <div className="font-sans font-black lg:text-[6rem] sm:text-[5rem] text-[3rem] text-center mb-5 uppercase">
              <div
                ref={textRef}
                className="lg:leading-20 sm:leading-16 leading-10"
              >
                Carefully
              </div>
              <div
                ref={textRef}
                className="lg:leading-20 sm:leading-16 leading-10"
              >
                Selected
              </div>
            </div>
          </div>
        </div>
        <div
          id="productCards"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden"
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
