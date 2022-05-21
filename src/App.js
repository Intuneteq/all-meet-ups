import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Allmeetup from "./pages/Allmeetup";
import Favorites from "./pages/Favorites";
import Newmeetup from "./pages/Newmeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Allmeetup />} />
        <Route path="new-meetup" element={<Newmeetup />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
}

export default App;
