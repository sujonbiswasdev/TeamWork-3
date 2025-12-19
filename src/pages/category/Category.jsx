import React, { useEffect, useState } from 'react'
import Button from '../../components/common/Button.jsx'
import axios from "axios";

const Category = () => {
  const [items,setitems]=useState([])
 useEffect(()=>{
   axios.get("https://teamwork-backend-lime.vercel.app/api/v1/cars")
    .then(res => {
      setitems(res.data.data)
    })
    .catch(err => {
      console.error(err);
    });
 },[])
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="bg-white rounded-xl p-4 space-y-6">
          <div>
            <h3 className="font-semibold mb-2">TYPE</h3>
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(t => (
              <label key={t} className="flex items-center gap-2 text-sm">
                <input type="checkbox" /> {t}
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">CAPACITY</h3>
            {["2 Person", "4 Person", "6 Person", "8+ Person"].map(c => (
              <label key={c} className="flex items-center gap-2 text-sm">
                <input type="checkbox" /> {c}
              </label>
            ))}
          </div>


          <div>
            <h3 className="font-semibold mb-2">PRICE</h3>
            <input type="range" className="w-full" />
            <p className="text-sm mt-1">Max. $100</p>
          </div>
        </aside>


        {/* Main Content */}
        <main className="lg:col-span-3 space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Pick-Up Location', 'Date', 'Time'].map(i => (
              <div key={i}>
                <p className="text-sm text-gray-500">{i}</p>
                <select className="w-full border rounded-md p-2 text-sm">
                  <option>Select</option>
                </select>
              </div>
            ))}
          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map(car => (
              <div key={car.name} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{car.title}</h3>
                    <p className="text-xs text-gray-500">{car.sport}</p>
                  </div>
                  <span className="text-red-500">♥</span>
                </div>
                <img src={car.image} alt={car.title} className="h-28 min-w-full object-cover rounded-lg my-4" />
                <div className="flex justify-between items-center">
                  <p className="font-semibold">${car.price}.00 <span className="text-sm text-gray-500">/day</span></p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Rent Now</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Category