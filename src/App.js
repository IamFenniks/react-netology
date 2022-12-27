import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/header/top-nav/TopNav';
import Calendar from './components/hw1/calendar/Calendar';
import ShopItemFunc from './components/hw1/class/ShopItemFunc';
import Portfolio from './components/hw2/filter/Portfolio';
import SideNav from './components/sidebar/SideNav';
import Store from './components/hw2/layouts/Store';
import Dropdown from './components/hw2/dropdown/Dropdown';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <div className='wrapper'>
      <TopNav />

      <SideNav />

      <Routes>
        <Route path="/shopitem" element={<ShopItemFunc item={item} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/store' element={<Store />} />
        <Route path='/dropdown' element={<Dropdown />} />
      </Routes>
    </div>
  );
}

export default App;
