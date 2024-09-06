import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Content/Layout";
import Login from "./Components/Login/Login"
import Register from "./Components/Login/Register";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/*" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
