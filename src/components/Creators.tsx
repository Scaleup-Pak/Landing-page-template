import iphone from "../assets/iphon.png";
import EmblaCarousel from "./Carousel";
import { useNavigate } from "react-router-dom";

export function Creators() {
  const navigate = useNavigate();
  // const handleScrollToWaitlist = () => {
  //   const element = document.querySelector("#waitlist-form");
  //   if (element) {
  //     const header = document.querySelector("header");
  //     const headerHeight = header ? header.offsetHeight : 0;
  //     window.scrollTo({
  //       top: (element as HTMLElement).offsetTop - headerHeight - 20,
  //       behavior: "smooth",
  //     });
  //   }
  // };
  
  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;
        window.scrollTo({
          top: (element as HTMLElement).offsetTop - headerHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="w-full pt-[105px] mb-4">
      {/* carousel section */}
      <div className="w-full  py-[55px]">
        <EmblaCarousel heading="Explore Our Top Creators" />
      </div>
      <div className="w-full  px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px]  mx-auto">
          <div className="mt-8  flex flex-col 2xl:gap-[60px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 ">
            <div className=" " id="creators">
              <h4
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-left mb-[17px]  text-[28px] sm:text-[32px] md:text-[40px]  leading-tight md:leading-[50px] font-sans font-bold "
              >
                Creator Program - The Comedy Economy{" "}
              </h4>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.60)",
                  fontFamily: "Nunito",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "33.8px",
                }}
                className="text-center md:text-left"
              >
                In the pursuit of innovation and happiness, La La Laugh is on a
                mission to build the clearest, fairest, and kindest way to
                monetize creativity. Our Creator Program is designed for real
                income—because why shouldn’t making people laugh also help you
                earn? With ongoing innovations, we’re finding smarter ways for
                creators to monetize and collaborate directly with brands and
                advertisers.
              </p>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.60)",
                  fontFamily: "Nunito",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "33.8px",
                }}
                className="text-center md:text-left"
              >
                We want to make La La Laugh the best place for you to create and
                share content that sparks joy. Have ideas or feedback? Have a
                look at our{" "}
                <span className="text-[#0b5bfc]  hover:cursor-pointer underline" onClick={() => handleNavClick("/creator-proposal")}>
                  {" "}
                  proposal for creators
                </span>{" "}
                and let us know if you have any{" "}
                <span
                  className="text-[#0b5bfc] underline hover:cursor-pointer"
                  onClick={() => handleNavClick("#contact")}
                >
                  Questions
                </span>
                .
              </p>
            </div>
            {/* creator program image  */}
            <div className=" " id="features">
              <div className=" pt-[53px]  px-[78px] w-full h-full flex justify-between gap-[100px] bg-[#F4F4F4] rounded-[30px]">
                {/* left side image wich will only show from md to above and right side text */}
                <div className="hidden lg:flex lg:flex-col lg:justify-end">
                  <div className=" w-full">
                    <img src={iphone} width={400} alt="Creators" />
                  </div>
                </div>
                {/* right side */}
                <div className="lg:w-[50%] w-full " id="">
                  <div className="flex flex-col gap-5 justify-center ">
                    <h4
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      className="text-center md:text-left text-[24px] lg:w-[50%] md:text-[30px] leading-tight md:leading-[50px] font-sans font-bold "
                    >
                      App Based On Your Dominant Hand
                    </h4>

                    <p
                      style={{ fontFamily: "Nunito" }}
                      className="text-center text-[#00000099]   md:text-left text-base sm:text-lg md:text-xl lg:text-[18px]    leading-relaxed md:leading-8"
                    >
                      Forget toxic feeds and endless doomscrolling. Here, jokes,
                      comedy, and parody are the cure. Trolls and dark
                      algorithms? Not welcome. Just pure comedy, inclusivity,
                      and a simple space to unwind. Ditch the drama. Let humor
                      be the medicine that changes the world. Join La La Laugh’s
                      joyful revolution.
                    </p>
                    {/* button */}
                    {/* <div className="flex justify-center lg:justify-start mb-6">
                      <button
                        onClick={handleScrollToWaitlist}
                        className="bg-[#3931C5] text-white cursor-pointer  px-6 py-3 rounded-[11px] transition hover:bg-[#2d25a0]"
                      >
                        Explore App
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
