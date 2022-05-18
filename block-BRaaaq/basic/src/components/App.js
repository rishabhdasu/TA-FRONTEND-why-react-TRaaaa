import Header from "./Header";
import Articles from "./Articles";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
