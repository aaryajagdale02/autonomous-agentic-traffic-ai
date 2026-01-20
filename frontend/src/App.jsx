import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

