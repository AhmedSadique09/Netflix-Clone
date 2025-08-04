import Row from "../components/Row";
import requests from "../request";
import Footer from "../components/Footer";
import Header2 from "../components/header2";
import Banner2 from "../components/banner2";

export default function Home() {
  return (
    <div className="App">
      <Header2 />
      <Banner2 />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={false} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} isLargeRow={false} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} isLargeRow={false} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} isLargeRow={false} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
      <Footer  bgColor="bg-[#111]" />
    </div>
  );
}
