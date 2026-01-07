import { useRef } from "react";
import HeroMainText from "./HeroMainText";
import Button from "../../components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        delay: 1,
        opacity: 0,
        duration: 1.4,
        ease: "expo.out",
      });

      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <div ref={containerRef} id="hero" className="min-h-screen">
      <div className="font2 font-medium italic sm:text-[3rem] text-[1.5rem] text-center sm:my-6 my-3">
        We are Bright
      </div>
      <div>
        <HeroMainText />
      </div>
      <div className="font1 sm:text-[2rem] text-[0.85rem] text-center sm:my-10 my-5 px-6">
        <div>A brand of specialty coffee. We also are places.</div>
        <div>Raw and singular coffee shops. Sharp and minimalist.</div>
      </div>
      <div className="flex justify-center">
        <Button message={"About Us"} />
      </div>
      <div id="video" className="w-[80vw] mx-auto">
        <div
          ref={videoContainerRef}
          className="lg:h-[80vh] md:h-[60vh] h-[40vh] overflow-hidden relative lg:my-28 sm:my-18 my-10"
        >
          <video
            ref={videoRef}
            id="hero-video"
            className="w-full h-[160%] -top-[20%] absolute bottom-0 object-cover"
            muted
            loop
            autoPlay
            src="../Video/Video2.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
