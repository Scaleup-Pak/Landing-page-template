import line from "../assets/line.svg";
import aboutsec from "../assets/aboutsec.png";
import about from "../assets/about.png";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export function About() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you! You've been added to our waitlist! 🎉", {
        duration: 4000,
        style: {
          fontFamily: "Nunito, sans-serif",
        }
      });
      setEmail("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section className="w-full bg-[#FFFFFF] pt-[105px]">
      <Toaster position="top-center" richColors />
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          {/* first section */}
          <div
            className="flex flex-col items-center justify-center"
            style={{ gap: 25 }}
          >
            <div className="flex flex-col items-center " style={{ gap: 25 }}>
              <div className="">
                <h1
                  className="text-[50px] leading-[56px]  text-center"
                  style={{ fontFamily: "Nunito, sans-serif", fontWeight: 700 }}
                >
                  <span className="text-[#3931C5]">Laughter</span> is the Reset
                </h1>
                {/* this image should show on the right side */}
                <div className="flex md:justify-end justify-center  mt-3 md:mr-[-28px] items-center  md:items-end">
                  <img src={line} alt="" width={221} height={17} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center max-w-[800px] text-center">
              <p className="text-paragraph">
                La La Laugh is the first social entertainment mobile application
                in the world revolutionizing how we connect through humor, a
                joyful antidote to toxic feeds and crazy times. Keep up to date
                with us
              </p>
            </div>
            
            {/* Email signup form */}
            <form id="waitlist-form" onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto mt-6">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isSubmitting}
                className="w-full sm:flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#3931C5] disabled:bg-gray-100 disabled:cursor-not-allowed"
                style={{ fontFamily: "Nunito, sans-serif" }}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto cursor-pointer bg-[#3931C5] text-white px-8 py-3 rounded-lg hover:bg-[#2d25a0] transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </form>

          </div>
          {/* image with responsivness for all screens */}
          <div className="flex justify-center mt-[80px]">
            <img src={about} alt="" className="w-auto h-auto" />
          </div>

          <div
            className="mt-[110px] flex flex-col 2xl:gap-[50px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 "
            id="about"
          >
            <div className="flex flex-col md:flex-row items-start justify-center md:justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-[171px]">
              <div className="flex-1 w-full md:w-auto">
                <h4
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: 700,
                    fontStyle: "normal",
                  }}
                  className="text-center md:text-left text-[28px] sm:text-[32px] md:text-[38px] lg:text-[40px] leading-tight md:leading-[50px]"
                >
                  Most Powerful Way To Connect Every Audience
                </h4>
              </div>

              <div className="flex-1 w-full md:w-auto">
                <p
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: 600,
                    fontStyle: "normal",
                  }}
                  className="text-center md:text-left text-base sm:text-lg md:text-xl lg:text-[26px]   leading-relaxed md:leading-9 text-[#222]"
                >
                  La La Laugh — the world's first social entertainment app where
                  laughter is the reset button
                </p>
              </div>
            </div>

            <div className=" ">
              <p
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-left text-[#22222280]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8"
              >
                La La Laugh is your “take-a-break” app, a global stage built to
                bring joy back to the internet. Here, everyone—not just
                professional comedians—can create and share laughter,
                discovering humor across languages and cultures. Our ambition?
                To become the best platform in the world for creator
                monetization while doing the most human thing of all: building
                connection through laughter.
              </p>
              <p
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-left text-[#22222280]    sm:text-lg md:text-xl lg:text-[22px]    leading-relaxed md:leading-8"
              >
                Forget toxic feeds and endless doomscrolling. Here, jokes,
                comedy, and parody are the cure. Trolls and dark algorithms? Not
                welcome. Just pure comedy, inclusivity, and a simple space to
                unwind. Ditch the drama. Let humor be the medicine that changes
                the world. Join La La Laugh’s joyful revolution.
              </p>
              <h2
                style={{
                  color: "#222",
                  fontFamily: "Nunito",
                  fontSize: "27px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "33.8px",
                }}
                className="mt-6 text-heading-large text-center md:text-left"
              >
                — Carlos Cicchelli, Founder & CEO
              </h2>
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
