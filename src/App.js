////import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import Hero from "./Components/Hero";
//import News from "./Components/News";
//import TopPicks from "./Components/TopPicks";
import NewsWithIcons from "./Components/News";
import TopPicksWithIcons from "./Components/TopPicks";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-slate-950 max-h-screen ">
      <div className=" flex flex-col ">
        <Hero />
        <NewsWithIcons />
        <TopPicksWithIcons />
        <Footer />
      </div>
    </div>
  );
}

export default App;
