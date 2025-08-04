export default function Subscription() {
  return (
    <section id="subscription" className="subscription bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 py-10 text-2xl">
        {/* Top Text */}
        <div className="text-center max-w-3xl">
          Ready to watch? Enter your email to create or restart your membership.
        </div>

        {/* Input + Button Group */}
        <div className="w-full flex flex-col sm:flex-row items-center gap-6 max-w-2xl">
          <input
            className="flex-1 bg-black/70 border border-gray-500 py-4 px-4 rounded-md text-gray-500 placeholder-white w-full"
            type="text"
            placeholder="Email Address"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded text-xl flex items-center justify-center gap-2 w-50% sm:w-auto">
            Get Started
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
