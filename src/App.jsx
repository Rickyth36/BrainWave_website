import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Collaboration/>
      </div>
      <ButtonGradient />
    </div>
  );
}

export default App;
