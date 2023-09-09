import Header from "./Constants/Header";
import Footer from "./Constants/Footer";
import Hero from "./Components/Hero";
import News from "./Components/News";

function App() {
  return (
    <>
      <Header />
      <div className=" flex flex-col ">
        <Hero />
        <News />
      </div>
      <Footer />
    </>
  );
}

export default App;
