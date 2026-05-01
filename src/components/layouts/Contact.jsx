import Container from "../Container";

const Contact = () => {
  return (
    <>
      <div id="contact" className="w-full py-12 md:py-20 font-poppins bg-sunC">
        <Container>
          <div className="mb-10 md:mb-15 flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-2xl md:text-3xl font-bold text-nightC">
                Got a Project in Mind? Let’s Talk!
              </h3>

              <p className="text-nightC py-6 md:py-10 md:pr-20 lg:pr-45 text-[15px] md:text-[16px]">
                I enjoy discussing new projects and design challenges. Whether
                it’s a full-scale web application or a small design tweak, I’m
                here to help. Drop me a message and let's get the most out of
                our first catch-up!
              </p>

              <h5 className="text-[18px] md:text-[20px] font-semibold pb-1">
                Living In:
              </h5>
              <p className="text-nightC">Dhaka, Bangladesh</p>

              <h5 className="text-[18px] md:text-[20px] font-semibold mt-3 pb-1">
                Email:
              </h5>
              <p className="text-nightC">rasel.ahamed.dev@gmail.com</p>
            </div>

            <div className="w-full lg:w-[50%]">
              <h3 className="text-2xl md:text-3xl font-bold text-nightC mb-5">
                Estimate your Project?
              </h3>

              <form action="" className="w-full max-w-lg py-4">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block text-nightC font-bold mb-1 ml-1 text-xs md:text-sm uppercase tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-sunC border-2 border-nightC text-nightC font-medium rounded-lg placeholder:text-nightC/60 focus:outline-none focus:ring-2 focus:ring-nightC transition-all"
                    placeholder="e.g. Md. R"
                  />
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-nightC font-bold mb-1 ml-1 text-xs md:text-sm uppercase tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-sunC border-2 border-nightC text-nightC font-medium rounded-lg placeholder:text-nightC/60 focus:outline-none focus:ring-2 focus:ring-nightC transition-all"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-nightC font-bold mb-1 ml-1 text-xs md:text-sm uppercase tracking-wide"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-sunC border-2 border-nightC text-nightC font-medium rounded-lg placeholder:text-nightC/60 focus:outline-none focus:ring-2 focus:ring-nightC transition-all resize-none"
                    placeholder="Tell me about your project idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-nightC hover:bg-nightC/90 text-sunC font-black py-3 md:py-4 px-6 rounded-lg uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                >
                  Send Inquiry
                </button>

                <p className="text-center text-nightC/70 text-xs md:text-sm italic py-2 font-medium">
                  * I usually respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
