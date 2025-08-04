import { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Trends() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  const movies = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    url: `/trend${i + 1}.webp`,
  }));

  return (
    <section id="trends" className="relative z-20 pt-2 sm:my-20 bg-pink-700 curved-top">
      {/* Background section that stretches full width always */}
      <div className="bg-black curved-top relative z-30 pt-40">
        {/* Content container */}
        <div className="container mx-auto px-4">
          <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6 text-white">
            Trending now
          </h2>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="hidden sm:flex bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
            >
              <FaChevronLeft size={20} />
            </button>

            {/* Scrollable Movie Slider */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar py-4 w-full"
            >
              {movies.map((movie, index) => (
                <motion.div
                  key={movie.id}
                  className="relative min-w-[180px] sm:min-w-[220px] md:min-w-[250px] snap-start rounded-2xl overflow-hidden group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-full aspect-[2/3] overflow-hidden">
                    <img
                      src={movie.url}
                      alt={`Movie ${movie.id}`}
                      className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-3xl sm:text-5xl font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] pointer-events-none select-none z-10">
                    {movie.id}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="hidden sm:flex bg-black/60 text-white p-3 rounded-full hover:bg-black transition"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trends;
