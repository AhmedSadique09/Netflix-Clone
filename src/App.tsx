import Footer from "./components/Footer";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Reasons from "./components/Reasons";
import Subscription from "./components/Subscription";
import Trends from "./components/Trends";
import Banner from "./components/Banner";

const App = () => {
  return (
    <>
      <Header />
      <main id="main" className="text-white bg-black">
        <div className="main">
          <Banner />
          <Trends />
          <Reasons />
          <Questions />
          <Subscription />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;