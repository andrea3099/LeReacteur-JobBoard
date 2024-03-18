import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Jobs />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
