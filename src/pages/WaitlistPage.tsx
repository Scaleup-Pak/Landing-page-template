import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import waitingListImage from "../assets/waitinglist.png";
import starIcon from "../assets/star.svg";

export function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] py-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Two column layout */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-16">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h1 
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-tight"
              >
                Connect & Explore Professional Comedians
              </h1>
              
              <p 
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-[#22222280] text-lg sm:text-xl md:text-[22px] leading-relaxed"
              >
                The first social entertainment mobile application in the world. LA LA LAUGH is revolutionizing how we connect through humor and not just professional comedians but also everybody else that can tell the world a good joke.
              </p>

              {/* Features list with star icons */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <img src={starIcon} alt="star" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <p 
                    style={{ fontFamily: "Nunito, sans-serif" }}
                    className="text-[#222222] text-base sm:text-lg md:text-xl"
                  >
                    Explore Our Top Content Creators
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <img src={starIcon} alt="star" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <p 
                    style={{ fontFamily: "Nunito, sans-serif" }}
                    className="text-[#222222] text-base sm:text-lg md:text-xl"
                  >
                    Most Powerful Way To Connect Every Audience
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <img src={starIcon} alt="star" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <p 
                    style={{ fontFamily: "Nunito, sans-serif" }}
                    className="text-[#222222] text-base sm:text-lg md:text-xl"
                  >
                    Creator Program - The Comedy Economy
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <img src={starIcon} alt="star" className="w-6 h-6 mt-1 flex-shrink-0" />
                  <p 
                    style={{ fontFamily: "Nunito, sans-serif" }}
                    className="text-[#222222] text-base sm:text-lg md:text-xl"
                  >
                    App Based On Your Dominant Hand
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img 
                src={waitingListImage} 
                alt="Waiting List" 
                className="w-full max-w-[600px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Stay Tuned Section */}
          <div className="mt-20 text-center">
            <h2 
              style={{ fontFamily: "Nunito, sans-serif" }}
              className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold mb-4"
            >
              Stay Tunned and Support New Ideas
            </h2>
            <p 
              style={{ fontFamily: "Nunito, sans-serif" }}
              className="text-[#22222280] text-base sm:text-lg md:text-xl mb-8"
            >
              drop your email below to join our community. Our app is going live soon!
            </p>

            {/* Email signup form */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3931C5]"
                style={{ fontFamily: "Nunito, sans-serif" }}
              />
              <button 
                className="w-full sm:w-auto bg-[#3931C5] text-white px-8 py-3 rounded-lg hover:bg-[#2d25a0] transition"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
