import playstoreIcon from "../assets/playstore.png";
import appleicon from "../assets/applelogo.png";
import downlodeImage from "../assets//downloadsection.png";

export function DownloadBanner() {
  return (
    <section className="w-full py-[105px] bg-[#3931C5]">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8 md:gap-[60px]">
            <div className="flex flex-col gap-[6px]">
              {/* adjust the size for small and mid screen */}
              <div className="w-full max-w-xs sm:max-w-md md:max-w-[780px] mx-auto mb-4 relative">
                <img src={downlodeImage} alt="" className="w-full h-auto block" />
                {/* White line effect attached to the bottom of the phone frame */}
                <div className="absolute bottom-[px] left-1/2 transform -translate-x-1/2 w-[110%] md:w-[105%] lg:w-[115%] h-[3px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>
              </div>
              <h4
                style={{ fontFamily: "Nunito, sans-serif", fontWeight: "700" }}
                className="text-center text-[#FFFFFF] text-[28px] sm:text-[32px] md:text-[40px] leading-tight md:leading-[57px]"
              >
                Download the LA LA LAUGH App
              </h4>
              <p
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-center text-[#FFFFFF80] sm:text-lg md:text-xl leading-relaxed md:leading-8"
              >
                Download LA LA LAUGH app today and avail exclusive videos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5">
              {/* Google Play Button */}
              <button className="bg-white cursor-pointer  hover:bg-white/90 transition-colors rounded-2xl px-[16px] py-3 flex items-center gap-4 ">
               <div className="flex items-center gap-4 ">
                 <img src={playstoreIcon} alt="" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-black/80 font-medium">
                    GET IT ON
                  </span>
                  <span className="text-[24px]  text-black">
                    Google Play
                  </span>
                </div>
               </div>
              </button>

              {/* App Store Button */}
              <button className="bg-white cursor-pointer hover:bg-white/90 transition-colors rounded-2xl px-6 py-3 flex items-center gap-4 ">
             <div className="flex items-center gap-4 ">
                 <img src={appleicon} alt="" />
                <div className="flex flex-col items-start">
                  <span className="text-xs text-black/80 font-medium">
                    Download On the
                  </span>
                  <span className="text-[24px]  text-black">
                    App Store
                  </span>
                </div>
             </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
