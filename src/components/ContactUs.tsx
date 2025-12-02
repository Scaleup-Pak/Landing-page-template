import { ContactForm } from "./ContactForm";

export function ContactUs() {
  return (
    <section className="w-full py-[105px] mb-4">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="mt-8  flex flex-col 2xl:gap-[60px] xl:gap-16 lg:gap-12 md:gap-10 sm:gap-8 gap-6 ">
          <div className="">
              <h4
              style={{ fontFamily: "Nunito, sans-serif" }}
              className="text-center mb-[17px]  text-[28px] sm:text-[32px] md:text-[40px]  leading-tight md:leading-[50px] font-sans font-bold "
            >
           Contact and Suggestions
            </h4>
           
          </div>
          {/* Contact Form */}
          <div className="mt-8">
            <ContactForm />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
