import line from "../assets/line.svg";
import aboutsec from "../assets/aboutsec.png";
import about from "../assets/about.png";

export function About() {
  return (
    <section className="w-full pt-[105px]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          {/* first section */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ gap: 25 }}
          >
            <div className="flex flex-col items-center" style={{ gap: 25 }}>
            <div className="">
                <h1 className="text-[50px] leading-[56px] font-bold text-center">
                <span className="text-[#3931C5]">Laughter</span> is the Reset
                Button
              </h1>
{/* this image should show on the right side */}
             <div className="flex md:justify-end justify-center mt-3 items-center md:mr-12 md:items-end">
               <img
                src={line}
                alt=""
                width={221}
                height={17}
              />
             </div>
            </div>
            </div>

            <div className="flex flex-col items-center max-w-[800px] text-center">
              <p className="text-paragraph">
                La La Laugh is the first social entertainment platform bringing
                humor back to humanity — a joyful antidote to toxic feeds and
                crazy times.
              </p>
            </div>
          </div>
          {/* image with responsivness for all screens */}
          <div className="flex justify-center mt-[80px]">
            <img src={about} alt="" className="w-auto h-auto" />
          </div>

          <div className="mt-[110px] flex flex-col 2xl:gap-[50px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 ">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-[171px]">
              <div className="flex-1 w-full md:w-auto">
                <h4 style={{ fontFamily: 'Nunito, sans-serif' }} className="text-center md:text-left text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[48px] 2xl:text-[50px] leading-tight md:leading-[50px] font-sans font-bold ">
                  Most Powerful Way To Connect Every Audience
                </h4>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <p style={{ fontFamily: 'Nunito, sans-serif' }} className="text-center md:text-left text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl 2xl:text-[26px] font-semibold font-sans leading-relaxed md:leading-9 text-[#222222]">
                  La La Laugh — the world's first social entertainment app where
                  laughter is the reset button
                </p>
              </div>
            </div>

            <div className=" ">
              <p style={{ fontFamily: 'Nunito, sans-serif' }} className="text-center text-[#22222280]   md:text-left text-base sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8">
                La La Laugh is your “take-a-break” app, a global stage built to
                bring joy back to the internet. Here, everyone—not just
                professional comedians—can create and share laughter,
                discovering humor across languages and cultures. Our ambition?
                To become the best platform in the world for creator
                monetization while doing the most human thing of all: building
                connection through laughter.
              </p>
              <p style={{ fontFamily: 'Nunito, sans-serif' }} className="text-center text-[#22222280]   md:text-left text-base sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8">
                Forget toxic feeds and endless doomscrolling. Here, jokes,
                comedy, and parody are the cure. Trolls and dark algorithms? Not
                welcome. Just pure comedy, inclusivity, and a simple space to
                unwind. Ditch the drama. Let humor be the medicine that changes
                the world. Join La La Laugh’s joyful revolution.
              </p>
             <h2 style={{ fontFamily: 'Nunito, sans-serif' }} className=" mt-6  text-heading-large">— Carlos Cicchelli, Founder & CEO</h2>

            </div>

            {/* image should be in the center and height width should be responsive according to screen size for sm md lg xl */} 
            <div className="flex justify-center lg:w-full w-[50%] mx-auto ">
              <img src={aboutsec} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}