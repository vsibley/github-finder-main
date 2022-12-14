import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubProvier } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from './pages/Home';
import About from './pages/About';
import Users from "./pages/Users";
import NotFound from './pages/NotFound';
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";

function App() {
  return (
    <GithubProvier>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<Users />} />
                <Route path="/" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvier>
  );
}

export default App;
