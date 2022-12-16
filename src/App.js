import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/header/top-nav/TopNav';
import Calendar from './components/hw1/calendar/Calendar';
import ShopItemFunc from './components/hw1/class/ShopItemFunc';
import moment from 'moment';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

var now = moment();

// debugger
  return (
    <div className='wrapper'>
      <TopNav />

      <Routes>
        <Route path="/shopitem" element={<ShopItemFunc item={item} />} />
        <Route path="/calendar" element={<Calendar date={now} />} />
      </Routes>
    </div>
  );
}

export default App;
