import waitingListImage from "../assets/waitinglist.png";
import starIcon from "../assets/star.svg";
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export function WaitlistPage() {
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
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" richColors />
        {/* Header */}
        <header className="w-full px-4 bg-[#3931C5] sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] py-4 sm:py-5 md:py-6 transition-all duration-300 relative z-50">
          <div className="max-w-[1440px] mx-auto t">
            <Link to="/">
           <img 
            src={logo} 
            alt="Lalalaugh logo" 
            className="h-7 sm:h-8 md:h-9 lg:h-10 transition-all duration-200" 
          />
          </Link>
          </div>
        </header>
       
      <main className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] py-20">
        <div className="max-w-[1440px]  mx-auto">
          {/* Two column layout */}
          <div className="flex flex-col  lg:flex-row items-center gap-8 lg:gap-16 mt-16">
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
                    Explore Our Top Creators
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
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
                className="w-full sm:w-auto cursor-pointer bg-[#3931C5] text-white px-8 py-3 rounded-lg hover:bg-[#2d25a0] transition disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <div className="w-full mt-8 sm:mt-10 md:mt-12">
        <div className="border-t border-[#CCCCCC]">
          <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
            <div className="max-w-[1440px] mx-auto pt-6 sm:pt-7 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pb-6">
              <p
                style={{ fontFamily: "Nunito, sans-serif" }}
                className="text-[#00000066] text-xs sm:text-[20px] text-center sm:text-left"
              >
                Lalalaughteams @ all rights reserved
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="#"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="www/youtube.com"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[#999999] hover:text-[#3931C5] transition-colors"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
