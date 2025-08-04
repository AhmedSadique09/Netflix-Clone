import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../request";

const Banner = () => {
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);

  if (!movie) return null;

  return (
    <section id="banner">
      <div
        className="text-white h-[450px] md:h-[500px] lg:h-[600px] flex items-center"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "50% 20%",
        }}
      >
        <div className="px-6 sm:px-12 md:px-20 max-w-4xl">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold pb-2">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="text-white font-bold rounded px-6 py-2 bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition-all duration-200">
              Play
            </button>
            <button className="text-white font-bold rounded px-6 py-2 bg-[rgba(51,51,51,0.5)] hover:bg-[#e6e6e6] hover:text-black transition-all duration-200">
              My List
            </button>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-xl leading-snug bg-black/30 p-3 rounded-md">
            {movie?.overview}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
