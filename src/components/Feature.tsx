import ImageGrid from "./ImageGrid";

export function Features() {
    const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
    // Add a small delay before closing to see the click animation
  };

  return (
    <section className="w-full pt-[105px] mb-4 " id="advertiser">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-8  flex flex-col 2xl:gap-[60px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 ">
            <div className=" " >
              <h4
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-left mb-[17px]  text-[28px] sm:text-[32px] md:text-[40px]  leading-tight md:leading-[50px] font-sans font-bold "
              >
                Humor Sells and does it well
              </h4>
              <p
                style={{ fontFamily: "Nunito", color: "rgba(0, 0, 0, 0.60)" }}
                className="text-left     sm:text-lg md:text-xl lg:text-[20px]    leading-relaxed md:leading-[29px] font-normal"
              >
                Now is the time to laugh — and laughter sells. Humor has always
                been a powerful connector, but in today’s world, it’s more
                essential than ever. People are exhausted by doomscrolling,
                politics, and polarization. They’re looking for relief, for joy,
                for a break. Comedy delivers that break. Live comedy ticket
                sales are booming, and studies show why:
              </p>
              <p
                style={{ fontFamily: "Nunito", color: "rgba(0, 0, 0, 0.60)" }}
                className="text-left    sm:text-lg md:text-xl lg:text-[20px]    leading-relaxed md:leading-[29px] font-normal"
              >
                90% of consumers are more likely to remember a brand that uses
                humor.
              </p>
              <p
                style={{ fontFamily: "Nunito", color: "rgba(0, 0, 0, 0.60)" }}
                className="text-left    sm:text-lg md:text-xl lg:text-[20px]    leading-relaxed md:leading-[29px] font-normal"
              >
                70% would choose a funny brand over the competition.
              </p>
              <p
                style={{ fontFamily: "Nunito", color: "rgba(0, 0, 0, 0.60)" }}
                className="text-left    sm:text-lg md:text-xl lg:text-[20px]    leading-relaxed md:leading-[29px] font-normal"
              >
                80% say they’re more likely to buy again if a brand makes them
                laugh.
              </p>
              <p
                style={{ fontFamily: "Nunito", color: "rgba(0, 0, 0, 0.60)" }}
                className="text-left    sm:text-lg md:text-xl lg:text-[20px]    leading-relaxed md:leading-[29px] font-normal"
              >
           On La La Laugh, your brand connects with audiences in their happiest moments — when they’re smiling, laughing, and ready to engage. Have look at our <span className="text-[#0b5bfc]  hover:cursor-pointer underline"> proposal for advertisers</span>  and let us know if you have any <span className="text-[#0b5bfc] underline hover:cursor-pointer" onClick={() => handleNavClick("#contact")}>suggestions</span>.
              </p>
              <h2
                style={{ fontFamily: "Nunito", color:"#000000",fontWeight:600, fontStyle:"normal" }}
                className="mt-6 text-heading text-[24px]"
              >
                It’s not just impressions, it’s emotional impact.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-16">
        <ImageGrid />
      </div>
    </section>
  );
}
