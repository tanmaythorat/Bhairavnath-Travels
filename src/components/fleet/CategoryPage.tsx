// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, Car, Shield, Clock } from "lucide-react";
// import { vehicleCategories } from "@/data/vehicleData";
// import VehicleDetailCard from "./VehicleDetailCard";

// const iconMap = { Car, Shield, Clock };

// // Slugify utility for category keys
// function slugify(str) {
//   return str.toLowerCase().replace(/\s+/g, '-');
// }

// function unslugify(slug) {
//   return Object.keys(vehicleCategories).find(k => slugify(k) === slug);
// }

// const CategoryPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const categoryKey = unslugify(category);
//   const categoryData = vehicleCategories[categoryKey];
//   if (!categoryData) return null;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
//       {/* Header */}
//       <div className={`bg-gradient-to-r ${categoryData.color} text-white py-12`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <button
//             onClick={() => navigate("/fleet")}
//             className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Fleet
//           </button>
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
//               {categoryData.icon && iconMap[categoryData.icon] && React.createElement(iconMap[categoryData.icon], { className: "w-8 h-8" })}
//             </div>
//             <div>
//               <h1 className="text-4xl lg:text-5xl font-bold">{categoryData.title}</h1>
//               <p className="text-white/90 text-lg mt-2">{categoryData.description}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-6 text-white/80">
//             <span className="flex items-center gap-2">
//               <Car className="w-4 h-4" />
//               {categoryData.vehicles.length} Models Available
//             </span>
//             <span className="flex items-center gap-2">
//               <Shield className="w-4 h-4" />
//               GPS Tracked
//             </span>
//             <span className="flex items-center gap-2">
//               <Clock className="w-4 h-4" />
//               24/7 Support
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* Vehicle Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//           {categoryData.vehicles.map(vehicle => (
//             <VehicleDetailCard
//               key={vehicle.id}
//               vehicle={vehicle}
//               category={categoryKey}
//               onSelect={() => navigate(`/vehicle/${vehicle.id}`)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;




// src/components/Fleet/CategoryPage.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Car, Shield, Clock } from "lucide-react";
import { vehicleCategories } from "@/data/vehicleData";
import VehicleDetailCard from "./VehicleDetailCard";

const iconMap = { Car, Shield, Clock };

// Slugify utility for both directions
function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-');
}
function unslugify(slug) {
  if (!slug) return null;
  slug = decodeURIComponent(slug).toLowerCase();
  return Object.keys(vehicleCategories).find(k => slugify(k) === slug);
}

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const categoryKey = unslugify(category);
  const categoryData = vehicleCategories[categoryKey];
  if (!categoryData) return <div>Not found</div>;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className={`bg-gradient-to-r ${categoryData.color} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/fleet")}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Fleet
          </button>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              {categoryData.icon && iconMap[categoryData.icon] && React.createElement(iconMap[categoryData.icon], { className: "w-8 h-8" })}
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold">{categoryData.title}</h1>
              <p className="text-white/90 text-lg mt-2">{categoryData.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              {categoryData.vehicles.length} Models Available
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              GPS Tracked
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
      {/* Vehicle Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {categoryData.vehicles.map(vehicle => (
            <VehicleDetailCard
              key={vehicle.id}
              vehicle={vehicle}
              category={categoryKey}
              onSelect={() => navigate(`/vehicle/${vehicle.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
