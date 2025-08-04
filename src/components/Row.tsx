import { useState, useEffect, useRef } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const baseUrl = "https://image.tmdb.org/t/p/original";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}

const Row = ({ title, fetchUrl, isLargeRow }: RowProps) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || "")
        .then((url: string | URL) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v") || "");
        })
        .catch((err: any) => console.log(err));
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="row" className="w-full relative text-white">
      <div className="px-4 sm:px-6 md:px-10">
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 pt-5">{title}</h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-black/60 text-white p-2 rounded-full transition"
        >
          <ChevronLeft />
        </button>

        <motion.div
          ref={scrollRef}
          className="group flex overflow-x-scroll scrollbar-hide scroll-smooth gap-3 sm:gap-4 md:gap-6 py-4"
        >
          {movies.map((movie) => (
            <motion.img
              key={movie.id}
              onClick={() => handleClick(movie)}
              whileHover={{ scale: 1.1 }}
              className={`rounded-md object-cover cursor-pointer transition-transform duration-300 ${
                isLargeRow
                  ? "w-[150px] sm:w-[180px] md:w-[200px] lg:w-[240px] max-h-[320px]"
                  : "w-[100px] sm:w-[140px] md:w-[160px] lg:w-[200px] max-h-[160px]"
              }`}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
            />
          ))}
        </motion.div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex bg-black/60 text-white p-2 rounded-full transition"
        >
          <ChevronRight />
        </button>

        {/* Trailer */}
        {trailerUrl && (
          <div className="flex justify-center mt-6">
            <YouTube
              videoId={trailerUrl}
              opts={{
                height: "360",
                width: "100%",
                playerVars: { autoplay: 1 },
              }}
              className="w-full max-w-[720px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Row;
