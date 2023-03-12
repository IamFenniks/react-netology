import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopNav from "./components/header/top-nav/TopNav";
import Calendar from "./components/hw1/calendar/Calendar";
import ShopItemFunc from "./components/hw1/class/ShopItemFunc";
import Portfolio from "./components/hw2/filter/Portfolio";
import SideNav from "./components/sidebar/SideNav";
import Store from "./components/hw2/layouts/Store";
import Dropdown from "./components/hw2/dropdown/Dropdown";
import Stars from "./components/hw3/films/Stars";
import Listing from "./components/hw3/listing/Listing";
import Chat from "./components/hw3/chat/Chat";
import Hex2Rgb from "./components/hw4/hex2rgb/Hex2Rgb";
import Steps from "./components/hw4/steps/Steps";
import ReadMe from "./components/tests/read-me/ReadMe";
import PhotoManager from "./components/hw4/photo/PhotoManager";
import DepositsCalc from "./components/hw4/deposits/DepositsCalc";
import Cards from "./components/hw5/cards/Cards";
import Decomposition from "./components/hw5/decomposition/Decomposition";
import Collapse from "./components/hw5/collapse/Collapse";
import Watches from "./components/hw6/watches/Watches";
import CRUD from "./components/hw6/crud/CRUD";
import ChatTwo from "./components/hw6/chat-two/ChatTwo";
import Main from "./components/main/Main";

function App() {
  const item = {
    brand: "Tiger of Sweden",
    title: "Leonard coat",
    description: "Minimalistic coat in cotton-blend",
    descriptionFull:
      "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: "£",
  };

  const items = [];

  const list  = [];

// console.log(items);

  return (
    <div className="wrapper">
      <TopNav />

      <SideNav />

      <Routes>
        <Route path="/react-netology"element={<Main />} />
        <Route path="/shopitem"      element={<ShopItemFunc item={item} />} />
        <Route path="/calendar"      element={<Calendar />} />
        <Route path="/portfolio"     element={<Portfolio />} />
        <Route path="/store"         element={<Store />} />
        <Route path="/dropdown"      element={<Dropdown />} />
        <Route path="/stars"         element={<Stars count={4} />} />
        <Route path="/listing"       element={<Listing items={ items } />} />
        <Route path="/chat"          element={<Chat list ={ list  } />} />
        <Route path="/hex2grb"       element={<Hex2Rgb />} />
        <Route path="/steps"         element={<Steps />} />
        <Route path="/photo"         element={<PhotoManager />} />
        <Route path="/deposits"      element={<DepositsCalc />} />
        <Route path="/cards"         element={<Cards />} />
        <Route path="/decomposition" element={<Decomposition />} />
        <Route path="/collapse"      element={<Collapse />} />
        <Route path="/watches"       element={<Watches />} />
        <Route path="/crud"          element={<CRUD />} />
        <Route path="/chat-two"      element={<ChatTwo />} />
        {/* =================== tests ================== */}
        <Route path="/tests" element={<ReadMe />} />
      </Routes>
    </div>
  );
}

export default App;
