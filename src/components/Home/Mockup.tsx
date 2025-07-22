import React, { useState, useEffect } from 'react';
import { 
  Search, 
  History, 
  Clock, 
  Plus, 
  ArrowLeft,
  User,
  Phone,
  MapPin,
  Settings,
  MoreVertical,
  Gift,
  Trash2,
  Edit3,
  Percent,
  DollarSign,
  Pointer
} from 'lucide-react';

// Order data
const orders = [
  {
    id: 'INV00001',
    type: 'Take Away',
    status: 'REFUNDED',
    amount: 4271.00,
    date: '09/10/2025',
    time: '02:44 PM',
    customer: 'Alen Walker',
    phone: '+91 123 123 1234',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
  },
  {
    id: 'INV00001',
    type: 'Web',
    status: 'PAID',
    amount: 4271.00,
    date: '09/10/2025',
    time: '02:44 PM',
    customer: 'Alen Walker',
    phone: '+91 123 123 1234',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
  },
  {
    id: 'INV00001',
    type: 'Future',
    status: 'REFUNDED',
    amount: 4271.00,
    date: '09/10/2025',
    time: '02:44 PM',
    customer: 'Alen Walker',
    phone: '+91 123 123 1234',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
  },
  {
    id: 'INV00001',
    type: 'Delivery',
    status: 'PAID',
    amount: 4271.00,
    date: '09/10/2025',
    time: '02:44 PM',
    customer: 'Alen Walker',
    phone: '+1 123 123 1234',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486'
  },
  {
    id: 'INV0259',
    type: 'Dine In',
    status: 'FULL VOID',
    amount: 4271.00,
    date: '09/10/2025',
    time: '02:44 PM',
    customer: 'Alen Walker',
    phone: '+91 123 123 1234'
  },
  {
    id: 'INV0259',
    type: 'Dine In',
    status: 'PAID',
    amount: 4271.00,
    date: '09/10/2025',
    time: '02:44 PM',
    customer: 'Alen Walker',
    phone: '+91 123 123 1234'
  }
];

// Menu items
const menuItems = Array(16).fill(null).map((_, i) => ({
  id: i + 1,
  name: 'Spicy Seasoned Seafood Noodles',
  price: 2.29,
  color: ['bg-gray-200', 'bg-pink-200', 'bg-purple-200', 'bg-green-200'][i % 4]
}));

const orderItems = [
  {
    id: 1,
    name: 'Schezwan Egg Noodles',
    note: 'Medium Bowl, More Gravy',
    qty: 1,
    price: 28.99,
    originalPrice: 28.99
  },
  {
    id: 2,
    name: 'Schezwan Egg Noodles',
    discount: '10%',
    qty: 0,
    price: 20.00,
    originalPrice: 28.99
  },
  {
    id: 3,
    name: 'Schezwan Egg Noodles',
    note: 'Medium Bowl, More Gravy',
    qty: 0,
    price: 28.99,
    originalPrice: 28.99
  }
];

// Cursor animation targets for each screen
const cursorTargets = [
  { x: '85%', y: '15%', delay: 3000 }, // Dashboard -> New Order button
  { x: '15%', y: '25%', delay: 3000 }, // Tables -> Click on table
  { x: '25%', y: '35%', delay: 3000 }, // Menu -> Click on menu item
  { x: '90%', y: '20%', delay: 3000 }, // Menu with actions -> More options
  { x: '20%', y: '40%', delay: 3000 }  // Pizza -> Size selection
];

function Mockup() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [fade, setFade] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: '50%', y: '50%' });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      const target = cursorTargets[currentScreen];
      
      // Move cursor to target
      setCursorPosition({ x: target.x, y: target.y });
      
      setTimeout(() => {
        // Click animation
        setCursorClicking(true);
        
        setTimeout(() => {
          setCursorClicking(false);
          
          // Transition to next screen
          setFade(false);
          setSlideDirection(Math.random() > 0.5 ? 'right' : 'left');
          
          setTimeout(() => {
            setCurrentScreen((prev) => (prev + 1) % 5);
            setFade(true);
          }, 400);
        }, 200);
      }, 1500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentScreen]);

  const screens = [
    <OrderDashboard key="dashboard" />,
    <TableLayout key="tables" />,
    <MenuScreen key="menu" />,
    <MenuScreenWithActions key="menu-actions" />,
    <PizzaCustomization key="pizza" />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-50 flex items-center justify-center p-4">
      {/* Compact Demo Container */}
      <div className="relative">
        {/* Device Frame */}
        <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl border-4 border-gray-700">
          <div className="bg-black rounded-xl overflow-hidden relative w-[900px] h-[600px]">
            {/* Screen Content */}
            <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              fade ? 'opacity-100 transform translate-x-0' : 
              `opacity-0 transform ${slideDirection === 'right' ? 'translate-x-8' : '-translate-x-8'}`
            }`}>
              {screens[currentScreen]}
            </div>
            
            {/* Animated Pointer Cursor */}
            <div 
              className={`absolute pointer-events-none z-50 transition-all duration-1000 ease-out ${
                cursorClicking ? 'scale-90' : 'scale-100'
              }`}
              style={{ 
                left: cursorPosition.x, 
                top: cursorPosition.y,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className={`relative ${cursorClicking ? 'animate-pulse' : ''}`}>
                {/* Pointer Icon */}
                <div className="relative">
                  <Pointer className="w-8 h-8 text-white drop-shadow-lg z-9" />
                  
                  {/* Click Ripple Effect */}
                  {cursorClicking && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-white rounded-full opacity-20 animate-ping"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full opacity-30 animate-ping animation-delay-100"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Device Details */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-600 rounded-full"></div>
      </div>
      
     
    </div>
  );
}

// Screen Components - Keeping your exact UI
function OrderDashboard() {
  return (
    <div className="h-full bg-gray-800 flex animate-slideInRight">
      {/* Sidebar */}
      <div className="w-12 bg-gray-900 flex flex-col items-center py-4 space-y-4">
        <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
          <div className="w-3 h-3 border border-white rounded-sm"></div>
        </div>
        {[Settings, User, History, Clock, MoreVertical, Settings, ArrowLeft].map((Icon, i) => (
          <Icon key={i} className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
          
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              <Clock className="w-4 h-4" />
              <span>Order Status</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              <span>Quick Order</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg text-sm">
              <Plus className="w-4 h-4" />
              <span>New Order</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6">
          {[
            { label: 'All', count: 12 },
            { label: 'Dine In', count: 12 },
            { label: 'Take Away', count: 12 },
            { label: 'Delivery', count: 12 },
            { label: 'Web', count: 12 },
            { label: 'Future', count: 12 }
          ].map((tab, index) => (
            <button
              key={tab.label}
              className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                index === 0 ? 'bg-gray-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {tab.label} <span className="ml-1 text-gray-400 text-xs">{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-3 gap-4">
          {orders.map((order, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-all cursor-pointer transform hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Order Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                    order.type === 'Take Away' ? 'bg-gray-600' :
                    order.type === 'Web' ? 'bg-purple-600' :
                    order.type === 'Future' ? 'bg-orange-600' :
                    order.type === 'Delivery' ? 'bg-green-600' :
                    'bg-gray-600'
                  }`}>
                    {order.type}
                  </span>
                  <span className="text-gray-400 text-xs">#{order.id}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  order.status === 'PAID' ? 'bg-green-600' :
                  order.status === 'REFUNDED' ? 'bg-red-600' :
                  'bg-orange-600'
                }`}>
                  {order.status}
                </span>
              </div>

              {/* Date and Amount */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-300">
                  <div>{order.date}</div>
                  <div>{order.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">${order.amount.toFixed(2)}</div>
                </div>
              </div>

              {/* Customer Info */}
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex items-center space-x-2">
                  <User className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{order.customer}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{order.phone}</span>
                </div>
                {order.address && (
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    <span className="text-xs line-clamp-2">{order.address}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TableLayout() {
  const tables = [
    { id: 1, type: 'round', size: 'small', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table1.svg', x: '15%', y: '25%' },
    { id: 2, type: 'rect', size: 'large', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table2.svg', x: '35%', y: '20%' },
    { id: 3, type: 'rect', size: 'large', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table3.svg', x: '60%', y: '20%' },
    { id: 4, type: 'round', size: 'large', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table4.svg', x: '85%', y: '15%' },
    { id: 5, type: 'rect', size: 'medium', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table2.svg', x: '20%', y: '50%' },
    { id: 6, type: 'round', size: 'small', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table1.svg', x: '50%', y: '55%' },
    { id: 7, type: 'rect', size: 'large', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table3.svg', x: '25%', y: '75%' },
    { id: 8, type: 'rect', size: 'medium', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table2.svg', x: '55%', y: '80%' },
    { id: 9, type: 'round', size: 'small', icon: 'https://sandbox.vovpos.com/backend/uploads/table_icon/table4.svg', x: '80%', y: '70%' }
  ];

  return (
    <div className="h-full bg-gray-800 flex animate-slideInLeft">
      {/* Sidebar */}
      <div className="w-12 bg-gray-900 flex flex-col items-center py-4 space-y-4">
        <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
          <div className="w-3 h-3 border border-white rounded-sm"></div>
        </div>
        {[Settings, User, History, Clock, MoreVertical, Settings, ArrowLeft].map((Icon, i) => (
          <Icon key={i} className="w-5 h-5 text-gray-400 hover:text-white transition-colors cursor-pointer" />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
           
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              <Clock className="w-4 h-4" />
              <span>Order Status</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              <span>Quick Order</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg text-sm">
              <Plus className="w-4 h-4" />
              <span>New Order</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6">
          {['All 12', 'Dine In 12', 'Take Away 12', 'Delivery 12', 'Web 12', 'Future 12'].map((tab, index) => (
            <button 
              key={tab} 
              className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                index === 0 ? 'bg-gray-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Floor Tabs */}
        <div className="flex space-x-4 mb-6">
          {['Ground Floor', 'Basement', 'Patio', 'Roof Top Bar', 'Mezzanine'].map((floor, i) => (
            <button 
              key={floor} 
              className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                i === 0 ? 'bg-gray-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {floor}
            </button>
          ))}
          <button className="bg-gray-700 px-3 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105">
            <Settings className="w-4 h-4" />
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
            All
          </button>
        </div>

        {/* Tables Layout */}
        <div className="bg-gray-700 rounded-lg h-96 relative overflow-hidden">
          {tables.map((table, index) => (
            <div
              key={table.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-all duration-300 ${
                table.size === 'small' ? 'w-16 h-16' :
                table.size === 'medium' ? 'w-20 h-20' : 'w-24 h-24'
              } opacity-90 hover:opacity-100 flex items-center justify-center shadow-lg hover:shadow-xl animate-fadeIn`}
              style={{ 
                left: table.x, 
                top: table.y,
                animationDelay: `${index * 150}ms`
              }}
            >
              <img 
                src={table.icon} 
                alt={`Table ${table.id}`}
                className="w-full h-full object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gray-500 rounded-lg flex items-center justify-center text-white text-sm">T${table.id}</div>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuScreen() {
  return (
    <div className="h-full bg-gray-800 flex animate-slideInRight">
      {/* Main Content */}
      <div className="w-full p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm"
              />
            </div>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-yellow-400 transition-all transform hover:scale-105 text-sm">
              <span className="w-5 h-5 bg-black text-yellow-500 rounded-full flex items-center justify-center text-xs font-bold">S</span>
              <span>Seat</span>
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              Open Item
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Order Detail (Dine-In)</span>
            <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>

        <div className="flex space-x-6">
          {/* Menu Section */}
          <div className="flex-1">
            {/* Category Tabs */}
            <div className="flex space-x-2 mb-6">
              {['Favourite','Main Course', 'Side Dishes'].map((category, i) => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                    i === 0 ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sub-category Tabs */}
            <div className="flex space-x-2 mb-6">
              {[ 'Cold Appetizers', 'Seafood', 'Vegetarian'].map((sub, i) => (
                <button 
                  key={sub}
                  className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                    i === 0 ? 'bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-4 gap-3">
              {menuItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`${item.color} p-4 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg animate-fadeIn`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-black font-medium text-sm mb-2 line-clamp-2">{item.name}</div>
                  <div className="text-black font-bold text-base">${item.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Detail Panel */}
          <div className="w-80 bg-gray-700 rounded-lg p-4 shadow-xl">
            <div className="border-b border-gray-600 pb-4 mb-4">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Name</span>
                <span>Qty</span>
                <span>Price</span>
              </div>
              <div className="text-xs text-gray-400 mb-4">Appetizer</div>
              
              {orderItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between mb-3 p-2 bg-gray-600 rounded hover:bg-gray-500 transition-all animate-slideInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-500 text-xs px-2 py-1 rounded flex-shrink-0">0{item.id}</span>
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate">{item.name}</div>
                        {item.note && <div className="text-xs text-gray-400 line-clamp-1">{item.note}</div>}
                        {item.discount && <div className="text-xs text-red-400">Discount: {item.discount}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mx-2">
                    <button className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center hover:bg-gray-400 transition-colors text-xs">-</button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center hover:bg-gray-400 transition-colors text-xs">+</button>
                  </div>
                  <div className="text-right">
                    {item.discount ? (
                      <>
                        <div className="text-red-400 line-through text-xs">${item.originalPrice}</div>
                        <div className="font-bold text-sm">${item.price}</div>
                      </>
                    ) : (
                      <div className="font-bold text-sm">${item.price}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>000</span>
                <span>$87.00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  <span>Discount</span>
                  <DollarSign className="w-4 h-4" />
                  <Percent className="w-4 h-4" />
                </div>
                <span>$10.00</span>
                <span>$87.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  <span>Gratuity (15%)</span>
                </div>
                <span>15.00%</span>
                <span>$87.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  <span>GST (5%)</span>
                </div>
                <span></span>
                <span>$6.99</span>
              </div>

              <div className="border-t border-gray-600 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>$115.00</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-6">
              <button className="bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition-all transform hover:scale-105 text-sm">
                Void
              </button>
              <button className="bg-yellow-500 text-black py-2 rounded font-medium hover:bg-yellow-600 transition-all transform hover:scale-105 text-sm">
                Hold
              </button>
              <button className="bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 transition-all transform hover:scale-105 text-sm">
                Fire
              </button>
              <button className="bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600 transition-all transform hover:scale-105 text-sm">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuScreenWithActions() {
  return (
    <div className="h-full bg-gray-800 flex animate-slideInLeft">
      {/* Main Content */}
      <div className="w-full p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 text-white pl-10 pr-4 py-3 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm"
              />
            </div>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              Seat 01
            </button>
            <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
              Open Item
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Order Detail (Dine-In)</span>
            <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>

        <div className="flex space-x-6">
          {/* Menu Section */}
          <div className="flex-1">
            {/* Category Tabs */}
            <div className="flex space-x-2 mb-6">
              {['Favourite', 'Main Course', 'Side Dishes'].map((category) => (
                <button key={category} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
                  {category}
                </button>
              ))}
            </div>

            {/* Sub-category Tabs */}
            <div className="flex space-x-2 mb-6">
              {['Cold Appetizers', 'Seafood', 'Vegetarian'].map((sub) => (
                <button key={sub} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 text-sm">
                  {sub}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-4 gap-3">
              {menuItems.map((item, index) => (
                <div 
                  key={item.id}
                  className={`${item.color} p-4 rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg animate-fadeIn`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-black font-medium text-sm mb-2 line-clamp-2">{item.name}</div>
                  <div className="text-black font-bold text-base">${item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-80 bg-gray-700 rounded-lg p-4 relative shadow-xl">
            {/* Action Popup */}
            <div className="absolute top-16 right-4 bg-gradient-to-br from-green-400 to-gray-400 p-4 rounded-lg grid grid-cols-2 gap-2 z-10 shadow-2xl animate-bounceIn">
              <button className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all transform hover:scale-110">
                <Gift className="w-6 h-6 text-white" />
              </button>
              <button className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all transform hover:scale-110">
                <Trash2 className="w-6 h-6 text-white" />
              </button>
              <button className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all transform hover:scale-110">
                <Percent className="w-6 h-6 text-white" />
              </button>
              <button className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-all transform hover:scale-110">
                <Edit3 className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Same content as MenuScreen */}
            <div className="border-b border-gray-600 pb-4 mb-4">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Name</span>
                <span>Qty</span>
                <span>Price</span>
              </div>
              <div className="text-xs text-gray-400 mb-4">Appetizer</div>
              
              {orderItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="flex items-center justify-between mb-3 p-2 bg-gray-600 rounded hover:bg-gray-500 transition-all animate-slideInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="bg-gray-500 text-xs px-2 py-1 rounded flex-shrink-0">0{item.id}</span>
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate">{item.name}</div>
                        {item.note && <div className="text-xs text-gray-400 line-clamp-1">{item.note}</div>}
                        {item.discount && <div className="text-xs text-red-400">Discount: {item.discount}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mx-2">
                    <button className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center hover:bg-gray-400 transition-colors text-xs">-</button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center hover:bg-gray-400 transition-colors text-xs">+</button>
                  </div>
                  <div className="text-right">
                    {item.discount ? (
                      <>
                        <div className="text-red-400 line-through text-xs">${item.originalPrice}</div>
                        <div className="font-bold text-sm">${item.price}</div>
                      </>
                    ) : (
                      <div className="font-bold text-sm">${item.price}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>000</span>
                <span>$87.00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  <span>Discount</span>
                  <DollarSign className="w-4 h-4" />
                  <Percent className="w-4 h-4" />
                </div>
                <span>$10.00</span>
                <span>$87.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  <span>Gratuity (15%)</span>
                </div>
                <span>15.00%</span>
                <span>$87.00</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  <span>GST (5%)</span>
                </div>
                <span></span>
                <span>$6.99</span>
              </div>

              <div className="border-t border-gray-600 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>$115.00</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-6">
              <button className="bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition-all transform hover:scale-105 text-sm">
                Void
              </button>
              <button className="bg-yellow-500 text-black py-2 rounded font-medium hover:bg-yellow-600 transition-all transform hover:scale-105 text-sm">
                Hold
              </button>
              <button className="bg-orange-500 text-white py-2 rounded font-medium hover:bg-orange-600 transition-all transform hover:scale-105 text-sm">
                Fire
              </button>
              <button className="bg-green-500 text-white py-2 rounded font-medium hover:bg-green-600 transition-all transform hover:scale-105 text-sm">
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PizzaCustomization() {
  return (
    <div className="h-full bg-gray-800 flex animate-slideInRight">
      <div className="w-full p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-105">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold">Chicken Cheese Pizza</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Order Detail (Dine-In)</span>
            <MoreVertical className="w-5 h-5 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>

        <div className="flex space-x-6">
          {/* Pizza Customization */}
          <div className="flex-1">
            {/* Option Tabs */}
            <div className="flex space-x-4 mb-6">
              {['Preparation', 'Extra Notes', 'Notes'].map((option, i) => (
                <button 
                  key={option}
                  className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                    i === 0 ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Customization Categories */}
            <div className="flex space-x-4 mb-6">
              {['Sizes', 'Cheese', 'Jalapeño', 'Onion'].map((category, i) => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-lg transition-all transform hover:scale-105 text-sm ${
                    i === 0 ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Size Options */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { size: 'Small', price: 2.29, selected: true },
                { size: 'Medium', price: 2.29, selected: false },
                { size: 'Large', price: 2.29, selected: false }
              ].map((item, index) => (
                <div 
                  key={item.size}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all transform hover:scale-105 animate-fadeIn ${
                    item.selected 
                      ? 'border-white bg-gray-600 shadow-lg' 
                      : 'border-gray-600 bg-gray-700 hover:border-gray-500'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="font-medium mb-2 text-base">{item.size}</div>
                  <div className="font-bold text-base">${item.price}</div>
                  {item.selected && (
                    <div className="flex items-center justify-center mt-2">
                      <div className="bg-white text-black px-2 py-1 rounded text-sm font-medium animate-pulse">
                        1
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Chicken Selection */}
            <div className="mb-6">
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 text-sm">
                Chicken
              </button>
            </div>

            {/* Noodles Options */}
            <div className="grid grid-cols-3 gap-4">
              {Array(3).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all transform hover:scale-105 shadow-md hover:shadow-lg animate-slideInUp"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="font-medium mb-2 text-sm line-clamp-2">Spicy Seasoned Seafood Noodles</div>
                  <div className="font-bold mb-3 text-base">${2.29}</div>
                  <div className="flex items-center space-x-2">
                    {['L', 'W', 'R'].map((letter) => (
                      <button 
                        key={letter}
                        className={`w-8 h-8 rounded-lg font-bold transition-all transform hover:scale-110 text-sm ${
                          letter === 'W' ? 'bg-white text-black' : 'bg-gray-600 text-white hover:bg-gray-500'
                        }`}
                      >
                        {letter}
                      </button>
                    ))}
                    <div className="flex items-center space-x-1 ml-4">
                      <span className="text-sm">1</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-80 bg-gray-700 rounded-lg p-4 shadow-xl">
            <div className="border-b border-gray-600 pb-4 mb-4">
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Name</span>
                <span>Qty</span>
                <span>Price</span>
              </div>
              
              <div className="mb-4 animate-slideInUp">
                <div className="font-medium mb-2 text-sm">Schezwan Egg Noodles</div>
                <div className="text-xs text-gray-400 mb-2">Note: Medium Bowl, More Gravy</div>
                <div className="text-xs text-gray-400 mb-2">Size: Small "06"</div>
                <div className="text-xs text-gray-400 mb-2">Topping:</div>
                <div className="text-xs text-gray-400 mb-1">Whole: Chicken, Extra cheese, Pepperoni</div>
                <div className="text-xs text-gray-400 mb-1">Left: Sausage (X3) $06.20</div>
                <div className="text-xs text-gray-400 mb-1">Right: Onions (X2) $08.49</div>
                <div className="text-xs text-gray-400 mb-1">Parent: Parent</div>
                <div className="text-xs text-gray-400">Child: Child A</div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <button className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center hover:bg-gray-400 transition-colors text-xs">-</button>
                    <span className="w-8 text-center text-sm">000</span>
                    <button className="w-6 h-6 bg-gray-500 rounded flex items-center justify-center hover:bg-gray-400 transition-colors text-xs">+</button>
                  </div>
                  <div className="font-bold text-base">$28.99</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mb-6">
              <button className="flex-1 bg-gray-600 py-2 rounded font-medium hover:bg-gray-500 transition-all transform hover:scale-105 text-sm">
                Clear All
              </button>
              <button className="flex-1 bg-gray-600 py-2 rounded font-medium hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg text-sm">
                Total $43.68
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mockup;