import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container style={{ marginTop: "3.6rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
