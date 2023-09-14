////import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import Hero from "./Components/Hero";
import News from "./Components/News";
import TopPicks from "./Components/TopPicks";
import HeroWithIcons from "./Components/Hero";
import NewsWithIcons from "./Components/News";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className=" flex flex-col ">
        <HeroWithIcons />
        <NewsWithIcons />
        <TopPicks />
      </div>
      <Footer />
    </div>
  );
}
//const AppWithIcons = withSocialIcons(App);
export default App;
