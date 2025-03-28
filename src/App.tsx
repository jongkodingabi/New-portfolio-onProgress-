import "./App.css";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";

function App() {
  return (
    <>
      <section className="overflow-x-hidden">
        <Hero />
      </section>
      <section className="overflow-x-hidden">
        <About />
      </section>
    </>
  );
}

export default App;
