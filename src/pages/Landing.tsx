import Header from "../components/Header";
import Banner from "../components/Banner";
import Trends from "../components/Trends";
import Reasons from "../components/Reasons";
import Questions from "../components/Questions";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Banner />
        <Trends />
        <Reasons />
        <Questions />
        <Subscription />
      </main>
      <Footer />
    </>
  );
}
