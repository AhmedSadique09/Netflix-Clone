export default function Banner() {
    return (
      <section id="banner" className="banner text-white relative z-20">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl leading-tight py-6">
            Unlimited movies, TV shows, and more
          </h1>
  
          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Starts at Rs 250. Cancel anytime.
          </h2>
  
          {/* Description */}
          <p className="pt-4 text-base sm:text-lg md:text-xl max-w-2xl">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
  
          {/* Input & Button */}
          <div className="mt-6 w-full max-w-3xl flex flex-col sm:flex-row items-center gap-6">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full flex-1 bg-black/70 border border-gray-500 py-4 px-4 rounded-md text-white placeholder-white"
            />
  
            <button className="w-50% sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded text-lg sm:text-xl flex items-center justify-center gap-3 transition-all duration-200">
              Get Started
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }
  