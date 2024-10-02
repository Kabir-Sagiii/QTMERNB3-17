import "./App.css";
import Header from "./components/header/Header";
import MSection from "./components/msection/MSection";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="container">
      <h2>Welcome to React JS world</h2>
      <Header />
      <MSection />
      <Footer />
    </div>
  );
}

export default App;
