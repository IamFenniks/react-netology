import logo from './logo.svg';
import './App.css';
import ShopItemFunc from './components/func/ShopItemFunc';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import Calendar from './components/func/Calendar';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  const now = new Date();

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
