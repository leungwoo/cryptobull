import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import Hero from "./Components/Hero";
import News from "./Components/News";
import TopPicks from "./Components/TopPicks";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header />
      <div className=" flex flex-col ">
        <Hero />
        <News />
        <TopPicks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
