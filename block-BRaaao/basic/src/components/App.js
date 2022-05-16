import Header from "./Header";
import Hero from "./Hero";
import Articles from "./Articles";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Hero />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
