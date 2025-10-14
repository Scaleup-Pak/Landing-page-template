import ImageGrid from "./ImageGrid";


export function Features() {
  return (
    <section className="w-full pt-[105px] mb-4">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-8  flex flex-col 2xl:gap-[60px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 ">
            <div className=" ">
              <h4
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-left mb-[17px]  text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px] leading-tight md:leading-[50px] font-sans font-bold "
              >
                Humor Sells and does it well
              </h4>
              <p
                style={{ fontFamily: "Nunito",color: "rgba(0, 0, 0, 0.60)" }}
                className="text-left     sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-[29px] font-normal"
              >
                Now is the time to laugh — and laughter sells. Humor has always
                been a powerful connector, but in today’s world, it’s more
                essential than ever. People are exhausted by doomscrolling,
                politics, and polarization. They’re looking for relief, for joy,
                for a break. Comedy delivers that break. Live comedy ticket
                sales are booming, and studies show why:
              </p>
              <p
                style={{ fontFamily: "Nunito" }}
                className="text-left text-[#00000099]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-[29px] font-normal"
              >
                90% of consumers are more likely to remember a brand that uses
                humor.
              </p>
              <p
                style={{ fontFamily: "Nunito" }}
                className="text-left text-[#00000099]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-[29px] font-normal"
              >
                70% would choose a funny brand over the competition.
              </p>
              <p
                style={{ fontFamily: "Nunito" }}
                className="text-left text-[#00000099]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-[29px] font-normal"
              >
                80% say they’re more likely to buy again if a brand makes them
                laugh.
              </p>
              <p
                style={{ fontFamily: "Nunito" }}
                className="text-left text-[#00000099]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-[29px] font-normal"
              >
                On La La Laugh, your brand connects with audiences in their
                happiest moments — when they’re smiling, laughing, and ready to
                engage.
              </p>
              <h2
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="mt-6 text-heading text-[24px]"
              >
                It’s not just impressions, it’s emotional impact.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-8">
        <ImageGrid />
        <ImageGrid />

      </div>
    </section>
  );
}
