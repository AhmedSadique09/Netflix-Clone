import { LuMonitorPlay } from "react-icons/lu";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GiWatchtower } from "react-icons/gi";
import { RiStarSmileLine } from "react-icons/ri";

function Reasons() {
  const reasons = [
    {
      title: "Enjoy on your TV",
      detail:
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: <LuMonitorPlay />,
    },
    {
      title: "Download your shows to watch offline",
      detail: "Save your favorites easily and always have something to watch.",
      icon: <FaCloudDownloadAlt />,
    },
    {
      title: "Watch everywhere",
      detail:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: <GiWatchtower />,
    },
    {
      title: "Create profiles for kids",
      detail:
        "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
      icon: <RiStarSmileLine />,
    },
  ];

  return (
    <section id="reasons" className="reason bg-black text-white py-10">
      <div className="container px-4">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-10 text-center">
          More Reasons to Join
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl p-8 pb-30 bg-gradient-to-br from-[#1c1246] via-[#1e1040] to-[#14072e] relative flex flex-col justify-between h-full shadow-lg transition-transform"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  {reason.detail}
                </p>
              </div>

              <div className="absolute right-6 bottom-4 text-[36px] sm:text-[42px] text-pink-400 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                {reason.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reasons;
