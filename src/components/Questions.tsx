import { useState } from "react";

function Questions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const questionAns = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  return (
    <section id="questions" className="questions bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
          Frequently Asked Questions
        </h2>

        {questionAns.map((item, index) => (
          <div key={index}>
            {/* Question */}
            <div
              onClick={() => handleToggle(index)}
              className="cursor-pointer text-lg sm:text-xl md:text-2xl font-bold bg-[#181818] px-4 sm:px-6 md:px-10 py-5 flex items-center justify-between mt-3 transition-all"
            >
              <div>{item.question}</div>
              <div className="text-3xl sm:text-4xl transition-all duration-300">
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>

            {/* Answer */}
            <div
              className={`bg-[#181818] text-base sm:text-lg md:text-xl leading-relaxed overflow-hidden transition-all duration-500 px-4 sm:px-6 md:px-10 ${
                activeIndex === index ? "max-h-[1000px] py-4" : "max-h-0 py-0"
              }`}
            >
              {item.answer.split("\n").map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Questions;
