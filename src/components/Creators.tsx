import mobile from "../assets/mobile.png";
import iphone from "../assets/iphone.png";

export function Creators() {
  return (
    <section className="w-full pt-[105px]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-8  flex flex-col 2xl:gap-[50px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 ">
            <div className="px-[46px] ">
              <div className=" ">
                <h4
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  className="text-left mb-[17px]  text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px] leading-tight md:leading-[50px] font-sans font-bold "
                >
                  Creator Program - The Comedy Economy{" "}
                </h4>
                <p
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  className="text-left text-[#22222280]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8"
                >
                  In the pursuit of innovation and happiness, La La Laugh is on
                  a mission to build the clearest, fairest, and kindest way to
                  monetize creativity. Our Creator Program is designed for real
                  income—because why shouldn’t making people laugh also help you
                  earn? With ongoing innovations, we’re finding smarter ways for
                  creators to monetize and collaborate directly with brands and
                  advertisers.
                </p>
                <p
                  style={{ fontFamily: "Nunito, sans-serif" }}
                  className="text-center text-[#22222280]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8"
                >
                  We want to make La La Laugh the best place for you to create
                  and share content that sparks joy. Have ideas or feedback?
                  Click Contact Us with suggestions—or simply join the waiting
                  list to be part of the launch.
                </p>
              </div>
            </div>
            <div className=" mt-[60px] ">
              <div className=" pt-[53px]  px-[78px] w-full h-full flex justify-between gap-[100px] bg-[#F4F4F4] rounded-[30px]">
                {/* left side image and right side text */}
                <div className=" ">
                  <div className=" w-full">
                    <img src={iphone} width={300}  alt="Creators" />
                  </div>
                </div>
                {/* right side */}
                <div className="w-[50%] ">
                  <div className="flex flex-col gap-5 justify-center ">
                    <h4
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      className="text-center md:text-left text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px] leading-tight md:leading-[50px] font-sans font-bold "
                    >
                      App Based On Your Dominant Hand
                    </h4>

                    <p
                      style={{ fontFamily: "Nunito, sans-serif" }}
                      className="text-center text-[#22222280]   md:text-left text-base sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8"
                    >
                      Forget toxic feeds and endless doomscrolling. Here, jokes,
                      comedy, and parody are the cure. Trolls and dark
                      algorithms? Not welcome. Just pure comedy, inclusivity,
                      and a simple space to unwind. Ditch the drama. Let humor
                      be the medicine that changes the world. Join La La Laugh’s
                      joyful revolution.
                    </p>
                    {/* button */}
                    <div>
                      <button className="bg-[#3931C5] text-white cursor-pointer items-start px-6 py-3 rounded-[11px] transition">
                        Join the Waitlist
                      </button>
                    </div>
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
