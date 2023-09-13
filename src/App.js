//import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import Hero from "./Components/Hero";
import News from "./Components/News";
import TopPicks from "./Components/TopPicks";
//import CoinBanner from "./Components/CoinBanner";
import withSocialIcons from "./Components/withSocialIcons";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* <Header /> */}
      <div className=" flex flex-col ">
        <Hero />
        {/* <CoinBanner /> */}
        <News />
        <TopPicks />
      </div>
      <Footer />
    </div>
  );
}
const AppWithIcons = withSocialIcons(App);
export default AppWithIcons;
