import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";

// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
};
export default App;
